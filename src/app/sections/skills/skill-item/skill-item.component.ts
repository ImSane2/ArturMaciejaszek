import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './../skill.model';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() skillItem: Skill;
  pDef = 'far fa-circle';
  pArray = [this.pDef, this.pDef, this.pDef];

  // prof1 = 'far fa-circle';
  // prof2 = 'far fa-circle';
  // prof3 = 'far fa-circle';

  constructor() { }

  // private assignSymbols() {
  //   if (this.skillItem.proficiency[0] === 1) {
  //     this.prof1 = 'far fa-circle circle-yellow';
  //   }
  //   if (this.skillItem.proficiency[0] === 2) {
  //     this.prof1 = 'fas fa-circle circle-green';
  //   }
  //   if (this.skillItem.proficiency[1] === 1) {
  //     this.prof2 = 'far fa-circle circle-yellow';
  //   }
  //   if (this.skillItem.proficiency[1] === 2) {
  //     this.prof2 = 'fas fa-circle circle-green';
  //   }
  //   if (this.skillItem.proficiency[2] === 1) {
  //     this.prof3 = 'far fa-circle circle-yellow';
  //   }
  //   if (this.skillItem.proficiency[2] === 2) {
  //     this.prof3 = 'fas fa-circle circle-green';
  //   }
  // }

  private profSymbols() {
    this.skillItem.proficiency.forEach(
      (p, i) => {
        if (p === 1) {
          this.pArray[i] = 'fas fa-circle circle-yellow';
        }
        if (p === 2) {
          this.pArray[i] = 'fas fa-circle circle-green';
        }
      }
    );

  }

  ngOnInit() {
    // this.assignSymbols();
    this.profSymbols();
  }

}

