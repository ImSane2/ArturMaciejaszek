import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromBasicInfo from '../../shared/store/basic-info.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  basicState: Observable<string>;

  constructor(private store: Store<fromBasicInfo.State>) { }

  ngOnInit() {
    this.basicState = this.store.select('greeting');
  }

}
