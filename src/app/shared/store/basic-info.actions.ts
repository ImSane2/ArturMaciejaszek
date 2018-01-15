import { Social } from './../../sections/contact/social.model';
import { Action } from '@ngrx/store';

export const ADD_SOCIAL = 'ADD_SOCIAL';
export const GET_ITEMS = 'GET_ITEMS';
// export const GET_NAME = 'GET_NAME';
// export const GET_GREETING = 'GET_GREETING';
// export const GET_SOCIALS = 'GET_SOCIALS';
export const UPDATE_INFO = 'UPDATE_INFO';
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

    constructor(public payload: {name: string, greeting: string, socials: Social[] }) {}
}

export class DeleteSocial implements Action {
    readonly type = DELETE_SOCIAL;

    constructor(public payload: number) {}
}

export type InfoActions =
AddSocial |
GetItems |
UpdateInfo |
DeleteSocial;
