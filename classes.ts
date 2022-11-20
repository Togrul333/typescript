class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `name:${name} versiya :${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberW: number = 4

    constructor(theModel:string) {
        this.model = theModel
    }

}