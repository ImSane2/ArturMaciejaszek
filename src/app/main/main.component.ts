import { UpdateInfo } from './../shared/store/basic-info.actions';
import { HttpModule, Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/auth.reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  editMode: Observable<fromAuth.State>;
  appState: Observable<fromApp.AppState>;

  constructor( private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
    // this.store.dispatch(new UpdateInfo({name: 'Artur', greeting: 'Hello', socials: []}));
  }

}
