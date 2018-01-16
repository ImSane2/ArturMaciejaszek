import { TryRegister, TryLogin } from './../../auth/auth.actions';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../auth/auth.reducers';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    this.store.dispatch(new TryRegister(form.value));
  }

  onSubmit(form: NgForm) {
    // this.store.dispatch(new TryLogin(form.value));
    this.store.select('token').subscribe ( res => console.log(res));
  }

}
