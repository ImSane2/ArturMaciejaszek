import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Social } from './social.model';

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

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.socialState = this.store.select('socials');
    this.editMode = this.store.select('authenticated').select('authenticated');
    this.pat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const query = form.value.query;
    // SEND IT TO MAIL
  }

}
