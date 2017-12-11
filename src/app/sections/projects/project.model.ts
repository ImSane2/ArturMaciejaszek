export class Project {
    constructor(
        public name: string,
        public link: string,
        public description?: string,
        public technologies?: string[]
    ) {}
}
