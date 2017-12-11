import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Work } from './work.model';

import * as fromWork from './store/work.reducers';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workState: Observable<Work[]>;

  constructor(private store: Store<fromWork.State>) { }

  ngOnInit() {
    this.workState = this.store.select('work');
  }

}
