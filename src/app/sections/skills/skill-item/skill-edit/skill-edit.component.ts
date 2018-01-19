import { UpdateSkill, AddSkill } from './../../store/skills.actions';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Skill } from './../../skill.model';

import * as fromApp from '../../../../store/app.reducers';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.scss']
})
export class SkillEditComponent implements OnInit {
  @Input() index: number;
  @Output() editEmitter = new EventEmitter<boolean>();
  skillItem: Skill;
  form: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('skills').select('skills').subscribe(
      (res: Skill[]) => this.skillItem = res[this.index]
    );
    if (this.index > -1) {
      this.setValues();
    }else {
      this.formInit();
    }
  }

  formInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      proficiency: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
      img: new FormControl(),
      tags: new FormControl()
    });
  }

  setValues() {
    let tags = '';
    for (const tag of this.skillItem.tags) {
      tags += '#' + tag;
    }

    this.form = new FormGroup({
      name: new FormControl(this.skillItem.name, Validators.required),
      proficiency: new FormControl(this.skillItem.proficiency, Validators.required),
      details: new FormControl(this.skillItem.details, Validators.required),
      img: new FormControl(this.skillItem.img),
      tags: new FormControl(tags)
    });
  }

  onSubmit() {
    if (this.index > -1) {
      this.store.dispatch(new UpdateSkill({index: this.index, item: this.form.value}));
    }else {
      this.store.dispatch(new AddSkill(this.form.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.editEmitter.emit(false);
  }

}
