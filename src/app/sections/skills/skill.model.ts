export class Skill {
    constructor(
        public name: string,
        public proficiency: number,
        public details: string,
        public tags: string[],
        public img?: string,
        public imgSrc?: string
    ) {}
}
