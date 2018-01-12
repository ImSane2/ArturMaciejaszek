import { Store } from '@ngrx/store';
import { Work } from './../work.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../../../auth/auth.reducers';
import * as fromApp from '../../../store/app.reducers';
import * as WorkActions from './../store/work.actions';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {
  @Input() workItem: Work;
  @Input() index: number;
  editMode: Observable<fromAuth.State>;
  itemToggle = false;
  editOn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
  }

  setEdit(e) {
    this.editOn = e;
  }

  deleteItem() {
    this.store.select('work').select('work').dispatch(new WorkActions.DeleteItem(this.index));
  }

}
