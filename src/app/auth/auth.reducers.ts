import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

const initialState = {
    token: null,
    authenticated: false
};

export function AuthReducers(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.REGISTER:
        case AuthActions.LOGIN:
            return {
                ...state,
                authenticated: true
            };
        case AuthActions.LOGOUT:
            return {
                ...state,
                token: null,
                authenticated: false
            };
        case AuthActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}
