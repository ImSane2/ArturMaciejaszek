import { DeleteSkill } from './../store/skills.actions';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Skill } from './../skill.model';

import * as fromAuth from '../../../auth/auth.reducers';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() skillItem: Skill;
  @Input() index: number;
  editMode: Observable<boolean>;
  editOn = false;
  starsArray = [];

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
    this.populateStars();
  }

  startEdit() {
    this.editOn = !this.editOn;
  }

  setEdit(e) {
    this.editOn = e;
  }

  deleteItem() {
    this.store.dispatch(new DeleteSkill(this.index));
  }

  populateStars() {
    const prof = this.skillItem.proficiency / 2;
    if (this.skillItem.proficiency % 2 === 0) {
      for (let i = 0; i < prof; i++) {
        this.starsArray.push('star fa fa-star star--full');
      }
    } else {
      for (let i = 1; i < prof; i++) {
        this.starsArray.push('star fa fa-star star--full');
      }
        this.starsArray.push('star fa fa-star-half-o star--half');
    }
    if (this.starsArray.length < 5) {
      for (let i = this.starsArray.length; i < 5; i++) {
        this.starsArray.push('star--b fa fa-star-o');
      }
    }
}

}

