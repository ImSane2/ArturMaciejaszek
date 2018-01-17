import { Action } from '@ngrx/store';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const TRY_REGISTER = 'TRY_REGISTER';
export const TRY_LOGIN = 'TRY_LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';

export class Register implements Action {
    readonly type = REGISTER;

    constructor() {}
}

export class Login implements Action {
    readonly type = LOGIN;

    constructor() {}
}

export class TryRegister implements Action {
    readonly type = TRY_REGISTER;

    constructor(public payload: {username: String, password: String}) {}
}

export class TryLogin implements Action {
    readonly type = TRY_LOGIN;

    constructor(public payload: {username: String, password: String}) {}
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: String) {}
}

export class Error implements Action {
    readonly type = ERROR;

    constructor(public payload: String) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;

    constructor() {}
}

export type AuthActions =
Register |
TryRegister |
TryLogin |
Login |
SetToken |
Error |
Logout;
