import { Action } from '@ngrx/store';
import { Work } from '../work.model';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM = 'GET_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Work) {}
}

export class GetItems implements Action {
    readonly type = GET_ITEMS;

    constructor() {}
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
GetItems |
UpdateItem |
DeleteItem;
