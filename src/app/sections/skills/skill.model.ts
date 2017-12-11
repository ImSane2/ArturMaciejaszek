export class Skill {
    constructor(
        public name: string,
        public proficiency: number[],
        public details: string,
        public tags: string[],
        public img?: string,
        public imgSrc?: string
    ) {}
}


// proficiency attr with 3 values for 3 dots either 0 = none, 1 = theoretical knowledge, 2 = experience in use