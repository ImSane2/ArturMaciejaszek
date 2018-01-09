import { Store } from '@ngrx/store';
import { Work } from './../work.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../../../auth/auth.reducers';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {
  @Input() workItem: Work;
  itemToggle = false;
  editMode: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
  }

}
