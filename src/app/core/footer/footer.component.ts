import { TryRegister, TryLogin } from './../../auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import * as fromAuth from '../../auth/auth.reducers';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  langs: Array<String>;
  language = this.translate.getBrowserLang();

  constructor(private store: Store<fromAuth.State>, private translate: TranslateService) { }

  ngOnInit() {
    this.langs = this.translate.getLangs();
  }

  onChange(e) {
    this.language = e;
    this.translate.use(this.language);
  }

  registerUser(form: NgForm) {
    this.store.dispatch(new TryRegister({username: form.value.username.toLowerCase() , password: form.value.password}));
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new TryLogin({username: form.value.username.toLowerCase() , password: form.value.password}));
  }
}
