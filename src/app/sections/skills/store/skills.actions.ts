import { Action } from '@ngrx/store';
import { Skill } from '../skill.model';

export const SET_SKILLS = 'SET_SKILLS';
export const ADD_SKILL = 'ADD_SKILL';
export const UPDATE_SKILL = 'UPDATE_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';

export class SetSkills implements Action {
    readonly type = SET_SKILLS;

    constructor(public payload: Skill[]) {}
}

export class AddSkill implements Action {
    readonly type = ADD_SKILL;

    constructor(public payload: Skill) {}
}

export class UpdateSkill implements Action {
    readonly type = UPDATE_SKILL;

    constructor(public payload: {index: number, item: Skill}) {}
}

export class DeleteSkill implements Action {
    readonly type = DELETE_SKILL;

    constructor(public payload: number) {}
}

export type SkillsActions =
SetSkills |
AddSkill |
UpdateSkill |
DeleteSkill;
