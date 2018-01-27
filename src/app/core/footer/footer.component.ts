import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() logged = false;
  @Output() langEmitter = new EventEmitter<string>();
  langs: Array<String>;
  language = this.translate.getBrowserLang();
  regForm = false;
  accessOn = false;
  user = '';

  constructor(private store: Store<fromAuth.State>, private translate: TranslateService) {}

  ngOnInit() {
    this.langs = this.translate.getLangs();
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
    this.user = form.value.username;
    this.logged = true;
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new TryLogin({
      username: form.value.username.toLowerCase(),
      password: form.value.password,
      l10n: this.language
    }));
    this.user = form.value.username;
    this.logged = true;
  }

  onLogout() {
    this.store.dispatch(new Logout());
    this.logged = false;
  }
}
