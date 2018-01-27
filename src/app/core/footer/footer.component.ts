import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { TryRegister, TryLogin, Logout } from './../../auth/auth.actions';
import * as fromAuth from '../../auth/auth.reducers';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() langEmitter = new EventEmitter<string>();
  langs: Array<String>;
  language = this.translate.getBrowserLang();
  logged = false;
  regForm = false;
  accessOn = false;
  user = '';

  constructor(private store: Store<fromAuth.State>, private translate: TranslateService) {}

  ngOnInit() {
    this.langs = this.translate.getLangs();
    this.store.select('authenticated').subscribe(
      (res: any) => { if (!res.authenticated) {
        this.logged = false;
      }}
    );
  }

  onChange(e) {
    this.language = e;
    this.translate.use(this.language);
    this.langEmitter.emit(this.language);
  }

  registerUser(form: NgForm) {
    this.store.dispatch(new TryRegister({
      username: form.value.username.toLowerCase(),
      password: form.value.password,
      l10n: this.language
    }));
    this.logMonitor(form.value.username);
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new TryLogin({
      username: form.value.username.toLowerCase(),
      password: form.value.password,
      l10n: this.language
    }));
    this.logMonitor(form.value.username);
  }

  logMonitor(user: string) {
    const sub = this.store.select('authenticated').subscribe(
      (res: any) => { if (res.authenticated) {
        this.logged = true;
        this.user = user;
        sub.unsubscribe();
      }}
    );
  }

  onLogout() {
    this.store.dispatch(new Logout());
    this.logged = false;
  }
}
