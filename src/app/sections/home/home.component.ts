import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { UpdateInfo } from './../../shared/store/basic-info.actions';
import * as fromBasicInfo from '../../shared/store/basic-info.reducers';
import * as fromAuth from '../../auth/auth.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  basicState: Observable<fromBasicInfo.State>;
  editMode: Observable<fromAuth.State>;
  editOn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.basicState = this.store.select('greeting');
    this.editMode = this.store.select('authenticated');
  }

  onSubmit(form: NgForm) {
    const name = form.value.myname;
    const greeting = form.value.greeting;
    this.store.dispatch(new UpdateInfo({name: name, greeting: greeting}));
    this.editOn = false;
  }

  onCancel() {
    this.editOn = false;
  }

}
