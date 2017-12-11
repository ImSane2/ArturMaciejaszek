export class Work {
    constructor(
        public company: string,
        public cLogo: string,
        public startDate: Date,
        public endDate: Date,
        public position: string,
        public responsibilities: string[]
    ) {}
}
