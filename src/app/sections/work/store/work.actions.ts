import { Action } from '@ngrx/store';
import { Work } from '../work.model';

export const SET_WORK = 'SET_WORK';
export const UPDATE_WORK = 'UPDATE_WORK';
export const ADD_WORK = 'ADD_WORK';
export const DELETE_WORK = 'DELETE_WORK';

export class AddWork implements Action {
    readonly type = ADD_WORK;

    constructor(public payload: Work) {}
}

export class SetWork implements Action {
    readonly type = SET_WORK;

    constructor(public payload: Work[]) {}
}

export class UpdateWork implements Action {
    readonly type = UPDATE_WORK;

    constructor(public payload: {index: number, item: Work}) {}
}

export class DeleteWork implements Action {
    readonly type = DELETE_WORK;

    constructor(public payload: number) {}
}

export type WorkActions =
AddWork |
SetWork |
UpdateWork |
DeleteWork;
