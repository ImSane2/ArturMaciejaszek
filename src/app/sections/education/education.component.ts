import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Education } from './edu.model';
import { Course } from './course.model';

import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  eduState: Observable<Education[]>;
  editMode: Observable<boolean>;
  editOn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.eduState = this.store.select('education').select('education');
    this.editMode = this.store.select('authenticated').select('authenticated');
  }

  setEdit(e) {
    this.editOn = e;
  }

}
