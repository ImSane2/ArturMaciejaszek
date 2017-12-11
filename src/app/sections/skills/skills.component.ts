import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Skill } from './skill.model';

import * as fromSkill from './store/skills.reducers';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillState: Observable<Skill[]>;

  constructor(private store: Store<fromSkill.State>) { }

  ngOnInit() {
    this.skillState = this.store.select('skills');
  }
}
