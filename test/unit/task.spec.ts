import { expect } from 'chai'

import { flatToHierarchical, validateData, Task, HierarchicalTask, checkTaskProps } from '../../src/task'
import { ConflictingId, MissingTask, InvalidTaskJSON, MissingRequiredProperty, UnexpectedTaskProperty } from '../../src/errors'


describe('flatToHierarchical', function() {
    it('turn flat tasks to hierarchical tasks', function() {
        const tasks: Task[] = [
            {
                description: "Pickup bread",
                ID: 3,
                previousID: 2,
                parentID: 1
            },
            {
                description: "Pickup milk",
                ID: 2,
                nextID: 3,
                parentID: 1
            },
            {
                description: "Go for a walk",
                ID: 4,
                previousID: 1,
                nextID: 5
            },
            {
                description: "Grocery shopping",
                ID: 1,
                nextID: 4
            },
            {
                description: "Send mail",
                ID: 5,
                previousID: 4
            }
        ]

        const expected: HierarchicalTask[] = [
            {
                task: {
                    description: "Grocery shopping",
                    ID: 1,
                    nextID: 4
                },
                subTasks: [
                    {
                        task: {
                            description: "Pickup milk",
                            ID: 2,
                            nextID: 3,
                            parentID: 1
                        },
                        subTasks: []
                    },
                    {
                        task: {
                            description: "Pickup bread",
                            ID: 3,
                            previousID: 2,
                            parentID: 1
                        },
                        subTasks: []
                    }
                ]
            },
            {
                task: {
                    description: "Go for a walk",
                    ID: 4,
                    previousID: 1,
                    nextID: 5
                },
                subTasks: []
            },
            {
                task: {
                    description: "Send mail",
                    ID: 5,
                    previousID: 4
                },
                subTasks: []
            }
        ]

        const result = flatToHierarchical(tasks)

        expect(result).to.deep.eq(expected)
        expect(result[0]).to.have.keys('task', 'subTasks')
    })

    it('returns an empty array when the input is empty', function() {
        expect(flatToHierarchical([])).to.be.empty
    })

    it('has empty subTasks array when there are no sub-tasks', function() {
        const tasks: Task[] = [
            {
                description: "Task-1",
                ID: 1,
                nextID: 2
            },
            {
                description: "Task-2",
                ID: 2,
                nextID: 3,
                previousID: 1
            },
            {
                description: "Task-3",
                ID: 3,
                previousID: 2
            }
        ]

        const result = flatToHierarchical(tasks)
        for (let task of result) {
            expect(task.subTasks).to.be.empty
        }
    })

    it('throws on duplicate task IDs', function() {
        const tasks: Task[] = [
            {
                ID: 1,
                description: "Task 1",
            },
            {
                ID: 1,
                description: "Also Task 1"
            }
        ]
        
        expect(() => flatToHierarchical(tasks)).to.throw(new ConflictingId(1).message)
    })

    it('throws when subtask refers to a missing task', function() {
        const tasks: Task[] = [
            {
                ID: 1,
                description: "Task 1"
            },
            {
                ID: 2,
                description: "Task 2",
                parentID: 3
            }
        ]

        expect(() => flatToHierarchical(tasks)).to.throw(new MissingTask(3).message)
    })

    it('throws on missing linked tasks.', function() {
        const missingNext: Task[] = [
            {
                ID: 1,
                description: "Task 1",
                nextID: 2
            },
        ]

        const missingPrevious: Task[] = [
            {
                ID: 3,
                description: "Task 3",
                previousID: 2
            }
        ]

        expect(() => flatToHierarchical(missingNext)).to.throw(new MissingTask(2).message)
        expect(() => flatToHierarchical(missingPrevious)).to.throw(new MissingTask(2).message)
    })
})

describe('validateData', function() {
    it('does not throw when data is valid.', function() {
        const tasks = [
            {
                description: "Task-1",
                ID: 1,
                nextID: 2
            },
            {
                description: "Task-2",
                ID: 2,
                nextID: 3,
                previousID: 1
            },
            {
                description: "Task-3",
                ID: 3,
                previousID: 2
            }
        ]

        expect(() => validateData(tasks)).to.not.throw()
    })

    it('throws when the data is not an array.', function() {
        const data = {
            ID: 1,
            description: "Task 1"
        }

        expect(() => validateData(data)).to.throw(new InvalidTaskJSON().message)
    })
})

describe('checkTaskProps', function () {
    it('throws on missing required props.', function() {
        const ID = {
            description: 'description'
        }

        const description = {
            ID: 2
        }

        expect(() => checkTaskProps(ID)).to.throw(new MissingRequiredProperty('ID').message)
        expect(() => checkTaskProps(description)).to.throw(new MissingRequiredProperty('description').message)
    })

    it('throws on props with the wrong type', function() {
        const ID = {
            ID: '2',
            description: "Task 2"
        }

        const description = {
            ID: 2,
            description: 32262
        }

        const parentID = {
            ID: 2,
            description: "Blah",
            parentID: "3"
        }

        expect(() => checkTaskProps(ID)).to.throw(new UnexpectedTaskProperty(['ID', 'string']).message)
        expect(() => checkTaskProps(description)).to.throw(new UnexpectedTaskProperty(['description', 'number']).message)
        expect(() => checkTaskProps(parentID)).to.throw(new UnexpectedTaskProperty(['parentID', 'string']).message)
    })

    it('throws on additional props', function () {
        const additionalProp = {
            ID: 2,
            description: "Task 2",
            subTasks: []
        }

        expect(() => checkTaskProps(additionalProp)).to.throw(new UnexpectedTaskProperty(['subTasks', 'object']).message)
    })
})