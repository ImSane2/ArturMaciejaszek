import { Social } from './../../sections/contact/social.model';
import { Action } from '@ngrx/store';

export const ADD_SOCIAL = 'ADD_SOCIAL';
export const GET_ITEMS = 'GET_ITEMS';
export const UPDATE_INFO = 'UPDATE_INFO';
export const SET_SOCIALS = 'SET_SOCIALS';
export const DELETE_SOCIAL = 'DELETE_SOCIAL';

export class AddSocial implements Action {
    readonly type = ADD_SOCIAL;

    constructor(public payload: Social) {}
}

export class GetItems implements Action {
    readonly type = GET_ITEMS;

    constructor() {}
}

export class UpdateInfo implements Action {
    readonly type = UPDATE_INFO;

    constructor(public payload: {name: string, greeting: string}) {}
}

export class DeleteSocial implements Action {
    readonly type = DELETE_SOCIAL;

    constructor(public payload: number) {}
}

export class SetSocials implements Action {
    readonly type = SET_SOCIALS;

    constructor(public payload: Social[]) {}
}

export type InfoActions =
AddSocial |
GetItems |
UpdateInfo |
DeleteSocial |
SetSocials;
