import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

    @Effect()
    authRegister = this.actions$
        .ofType(AuthActions.TRY_REGISTER)
        .map( (action: AuthActions.TryRegister) => action.payload )
        .switchMap( payload => this.regUser(payload) )
        .map( res => res.json() )
        .mergeMap( res =>  {
            return [
                {type: AuthActions.REGISTER},
                {type: AuthActions.SET_TOKEN,
                payload: res.token}
            ];
        });


    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do( res => console.log('Logged out successfully') );

    constructor(private actions$: Actions, private http: Http) {}

    regUser(credentials) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', credentials, {headers: headers});
    }
}


