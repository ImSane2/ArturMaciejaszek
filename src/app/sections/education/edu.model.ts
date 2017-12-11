import { Course } from './course.model';

export class Education {

    constructor(
        public school: string,
        public logo: string,
        public startDate: Date,
        public endDate: Date,
        public type: string,
        public faculty: string,
        public specialization: string,
        public courses: Course[]
    ) {}
}


// Education class for aggregated educative experience with courses included