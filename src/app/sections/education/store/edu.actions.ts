import { Education } from './../edu.model';
import { Action } from '@ngrx/store';

export const SET_EDU = 'SET_EDU';
export const GET_ITEM = 'GET_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Education) {}
}

export class SetEdu implements Action {
    readonly type = SET_EDU;

    constructor(public payload: Education[]) {}
}

export class GetItem implements Action {
    readonly type = GET_ITEM;

    constructor(public payload: number) {}
}

export class UpdateItem implements Action {
    readonly type = UPDATE_ITEM;

    constructor(public payload: {index: number, item: Education}) {}
}

export class DeleteItem implements Action {
    readonly type = DELETE_ITEM;

    constructor(public payload: number) {}
}

export type EduActions =
AddItem |
GetItem |
SetEdu |
UpdateItem |
DeleteItem;
