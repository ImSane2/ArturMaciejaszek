import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import { Work } from './work.model';

import * as WorkActions from './store/work.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromWork from './store/work.reducers';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workState: Observable<fromWork.State>;
  editMode: Observable<boolean>;
  editOn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.workState = this.store.select('work');
    this.editMode = this.store.select('authenticated').select('authenticated');
  }

  setEdit(e) {
    this.editOn = e;
  }

}
