import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromEdu from './store/edu.reducers';
import { Education } from './edu.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  eduState: Observable<Education[]>;

  constructor(private store: Store<fromEdu.State>) { }

  ngOnInit() {
    this.eduState = this.store.select('education');
  }

}
