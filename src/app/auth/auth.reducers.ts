export interface State {
    token: string;
    authenticated: boolean;
}

const initialState = {
    token: null,
    authenticated: true
};

export function AuthReducers(state = initialState, action) {
    return state;
}
