import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBasicInfo from '../../shared/store/basic-info.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameState: Observable<string>;

  constructor(private store: Store<fromBasicInfo.State>) { }

  ngOnInit() {
    this.nameState = this.store.select('name');
  }

}
