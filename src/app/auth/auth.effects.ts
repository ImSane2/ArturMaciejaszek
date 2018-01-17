import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    @Effect()
    authRegister = this.actions$
        .ofType(AuthActions.TRY_REGISTER)
        .switchMap( (action: AuthActions.TryRegister) =>
            this.regUser(action.payload)
                .mergeMap( res => {
                            console.log(res.json());
                            this.router.navigate(['profile/' + res.json().user.username]);
                            return [{type: AuthActions.REGISTER},
                            {type: AuthActions.SET_TOKEN,
                            payload: res.json().token}];
                            }
                        )
                    );

    @Effect()
    authLogin = this.actions$
        .ofType(AuthActions.TRY_LOGIN)
        .switchMap( (action: AuthActions.TryLogin) =>
            this.logUser(action.payload)
                .mergeMap( res => {
                    if (res.json().success) {
                        console.log(res.json());
                        this.router.navigate(['profile/' + res.json().user.username]);
                        return [
                            {type: AuthActions.LOGIN},
                            {type: AuthActions.SET_TOKEN,
                            payload: res.json().token}
                    ];
                    }else {
                        console.log(res.json());
                        return [{type: AuthActions.ERROR,
                                payload: res.json().msg}];
                    }
                }
                ));

    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do( res => console.log('Logged out successfully') );

    constructor(private actions$: Actions, private http: Http, private router: Router) {}

    regUser(credentials) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', credentials, {headers: headers});
    }

    logUser(credentials) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', credentials, {headers: headers});
    }
}
