import { Action } from '@ngrx/store';
import { Work } from '../work.model';

export const SET_WORK = 'SET_WORK';
export const GET_ITEM = 'GET_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Work) {}
}

export class SetWork implements Action {
    readonly type = SET_WORK;

    constructor(public payload: Work[]) {}
}

export class GetItem implements Action {
    readonly type = GET_ITEM;

    constructor(public payload: number) {}
}

export class UpdateItem implements Action {
    readonly type = UPDATE_ITEM;

    constructor(public payload: {index: number, item: Work}) {}
}

export class DeleteItem implements Action {
    readonly type = DELETE_ITEM;

    constructor(public payload: number) {}
}

export type WorkActions =
AddItem |
GetItem |
SetWork |
UpdateItem |
DeleteItem;
