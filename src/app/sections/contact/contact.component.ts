import { Component, OnInit } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Social } from './social.model';

import { AddSocial } from './../../shared/store/basic-info.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromBasicInfo from '../../shared/store/basic-info.reducers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  socialState: Observable<fromBasicInfo.State>;
  editMode: Observable<boolean>;
  pat: RegExp;
  msgSent = false;
  addSocial = false;

  constructor(private store: Store<fromApp.AppState>,
              private http: Http) {}

  ngOnInit() {
    this.socialState = this.store.select('socials');
    this.editMode = this.store.select('authenticated').select('authenticated');
    this.pat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  onSubmit(form: NgForm) {
    this.sendMail({
      name: form.value.name,
      email: form.value.email,
      query: form.value.query
    }).subscribe(
      res => this.msgSent = true
      // MAKE THE RESPONSE POP UP OR SMTH
    );
  }

  socialSubmit(form: NgForm) {
    this.store.dispatch(new AddSocial(form.value));
    this.socialCancel();
  }

  socialCancel() {
    this.addSocial = false;
  }

  sendMail({name: name, email: email, query: query}) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/contact', {
      name: name,
      email: email,
      query: query
    }, {headers: headers});
  }


}
