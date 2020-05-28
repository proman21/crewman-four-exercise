import { ConflictingId, invariant, MissingTask, InvalidTaskJSON, UnexpectedTaskProperty, MissingRequiredProperty } from "./errors"

export interface Task {
    description: string
    ID: number
    nextID?: number
    previousID?: number
    parentID?: number
}

export interface HierarchicalTask {
    task: Task,
    subTasks: HierarchicalTask[]
}

/**
 * Convert flat list of tasks to a hierarchical task list.
 * @param tasks Flat list of tasks to convert
 */
export function flatToHierarchical(tasks: Task[]): HierarchicalTask[] {
    const taskIndex: Map<number, HierarchicalTask> = new Map()

    /// Build an index of tasks.
    tasks.forEach((taskData: any) => {
        const task: Task = taskData
        invariant(!taskIndex.has(task.ID), new ConflictingId(task.ID))
        taskIndex.set(task.ID, { task, subTasks: [] })
    })

    // Then build the task heirarchy
    let tasksOutput: HierarchicalTask[] = []
    taskIndex.forEach(value => {
        if (value.task.nextID) {
            invariant(taskIndex.has(value.task.nextID), new MissingTask(value.task.nextID))
        }

        if (value.task.previousID) {
            invariant(taskIndex.has(value.task.previousID), new MissingTask(value.task.previousID))
        }

        const parentID = value.task.parentID
        if (parentID) {
            const parent = taskIndex.get(parentID)
            if (parent) {
                parent.subTasks.push(value)
            } else {
                throw new MissingTask(parentID)
            }
        } else {
            tasksOutput.push(value)
        }
    })

    return tasksOutput
}

/**
 * Validate the task JSON data.
 * @param data JSON data to validate
 */
export function validateData(data: any) {
    invariant(Array.isArray(data), new InvalidTaskJSON())
    data.forEach((taskData: any) => {
        checkTaskProps(taskData)
    });
}

const taskProps = ["description", "ID", "nextID", "previousID", "parentID"]
const taskPropTypes: {[name: string]: string} = {
    ID: "number",
    description: "string",
    nextID: "number",
    previousID: "number",
    parentID: "number"
}
const required = ['description', 'ID']

/**
 * Validate the structure and types of a possible task
 * @param task Potential task to check
 * @throws If the data is not a valid task
 */
export function checkTaskProps(task: any) {
    const props: [string, string][] = Object.entries(task).map(([name, value]) => [name, typeof value])
    const unexpected = props.filter(([name, _ty]) => !taskProps.includes(name))

    if (unexpected.length !== 0) {
        throw new UnexpectedTaskProperty(unexpected[0])
    }

    const missing = required.filter(name => !props.map(prop => prop[0]).includes(name))

    if (missing.length !== 0) {
        throw new MissingRequiredProperty(missing[0])
    }

    for (let prop of props) {
        const [name, ty] = prop
        if (ty !== taskPropTypes[name]) {
            throw new UnexpectedTaskProperty(prop)
        }
    }
}
