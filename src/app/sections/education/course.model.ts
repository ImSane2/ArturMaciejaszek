export class Course {
    constructor(
        public courseName: string,
        public mark: number,
        public description: string,
        public tags: string[]
    ) {}
}


// Course model for detailes information about courses taken
// it may also come handy for self-tought instance of education where it may matter