import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Skill } from './skill.model';

import * as fromSkill from './store/skills.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillState: Observable<fromSkill.State>;
  editMode: Observable<boolean>;
  skillFilter: string;
  editOn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.skillState = this.store.select('skills');
    this.editMode = this.store.select('authenticated').select('authenticated');
  }

  setEdit(e) {
    this.editOn = e;
  }

}
