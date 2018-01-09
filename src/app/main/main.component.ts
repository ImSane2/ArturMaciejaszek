import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromAuth from '../auth/auth.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  editMode: Observable<boolean>;

  constructor( private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
  }

}
