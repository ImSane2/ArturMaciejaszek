import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './../skill.model';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() skillItem: Skill;
  starsArray = [];

  constructor() {}

  ngOnInit() {
    this.populateStars();
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

