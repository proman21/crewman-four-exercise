export function invariant(condition: boolean, error: Error) {
    if (!condition) {
        throw error
    }
}

export class UnexpectedTaskProperty extends Error {
    constructor(prop: [string, string]) {
        const [name, ty] = prop
        super(`Task has invalid prop ${name} with type ${ty}`)
    }
}

export class MissingRequiredProperty extends Error {
    constructor(prop: string) {
        super(`Task is missing required prop ${prop}`)
    }
}

export class InvalidTaskJSON extends Error {
    constructor() {
        super("Type at JSON path '/' is not an Array.")
    }
}

export class ConflictingId extends Error {
    constructor(id: number) {
        super(`Task already exists with ID=${id}`)
    }
}

export class MissingTask extends Error {
    constructor(id: number) {
        super(`Task does not exist with ID=${id}`)
    }
}