import { Action } from '@ngrx/store';
import { Skill } from '../skill.model';

export const SET_SKILLS = 'SET_SKILLS';

export class SetSkills implements Action {
    readonly type = SET_SKILLS;

    constructor(public payload: Skill[]) {}
}

export type SkillsActions =
SetSkills;
