import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

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
            this.regUser(action.payload).take(1)
                .switchMap( res => {
                            // console.log(res.json());
                            if (res.json().success) {
                                this.router.navigate(['profile/' + res.json().user.username]);
                                return [{type: AuthActions.REGISTER},
                                        {type: AuthActions.SET_TOKEN,
                                        payload: res.json().token}];
                            }else {
                                this.flash.show(res.json().msg, {cssClass: 'alert'});
                                return [{type: AuthActions.ERROR,
                                        payload: res.json().msg}];
                            }
                            }
                        )
                    );

    @Effect()
    authLogin = this.actions$
        .ofType(AuthActions.TRY_LOGIN)
        .switchMap( (action: AuthActions.TryLogin) =>
            this.logUser(action.payload).take(1)
                .mergeMap( res => {
                    if (res.json().success) {
                        // console.log(res.json());
                        // this.flash.show(res.json().msg);
                        this.router.navigate(['profile/' + res.json().user.username]);
                        return [
                            {type: AuthActions.LOGIN},
                            {type: AuthActions.SET_TOKEN,
                            payload: res.json().token}
                        ];
                    }else {
                        // console.log(res.json());
                        this.flash.show(res.json().msg, {cssClass: 'alert'});
                        return [{type: AuthActions.ERROR,
                                payload: res.json().msg}];
                    }
                }
                ));

    @Effect({dispatch: false})
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT).take(1)
        .do( res => console.log('Logged out successfully') );

    constructor(private actions$: Actions, private http: Http, private router: Router, private flash: FlashMessagesService) {}

    regUser(credentials) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', credentials, {headers: headers});
    }

    logUser(credentials) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', credentials, {headers: headers});
    }
}
