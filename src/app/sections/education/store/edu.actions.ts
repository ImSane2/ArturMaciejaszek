import { Education } from './../edu.model';
import { Action } from '@ngrx/store';

export const SET_EDU = 'SET_EDU';
export const GET_EDU = 'GET_EDU';
export const UPDATE_EDU = 'UPDATE_EDU';
export const ADD_EDU = 'ADD_EDU';
export const DELETE_EDU = 'DELETE_EDU';

export class AddEdu implements Action {
    readonly type = ADD_EDU;

    constructor(public payload: Education) {}
}

export class SetEdu implements Action {
    readonly type = SET_EDU;

    constructor(public payload: Education[]) {}
}

export class GetEdu implements Action {
    readonly type = GET_EDU;

    constructor(public payload: number) {}
}

export class UpdateEdu implements Action {
    readonly type = UPDATE_EDU;

    constructor(public payload: {index: number, item: Education}) {}
}

export class DeleteEdu implements Action {
    readonly type = DELETE_EDU;

    constructor(public payload: number) {}
}

export type EduActions =
AddEdu |
GetEdu |
SetEdu |
UpdateEdu |
DeleteEdu;
