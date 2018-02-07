import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromApp from '../store/app.reducers';
import * as fromEdu from '../sections/education/store/edu.reducers';
import * as fromWork from '../sections/work/store/work.reducers';
import * as fromSkills from '../sections/skills/store/skills.reducers';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  eduState: fromEdu.State;
  workState: fromWork.State;
  skillsState: fromSkills.State;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('education').subscribe( res => this.eduState = res);
    this.store.select('work').subscribe( res => this.workState = res);
    this.store.select('skills').subscribe( res => this.skillsState = res);
  }

}
