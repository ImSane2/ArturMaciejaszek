import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Education } from '../../edu.model';

import * as fromApp from '../../../../store/app.reducers';
import { AddEdu, UpdateEdu } from '../../store/edu.actions';

@Component({
  selector: 'app-edu-edit',
  templateUrl: './edu-edit.component.html',
  styleUrls: ['./edu-edit.component.scss']
})
export class EduEditComponent implements OnInit {
  @Input() index: number;
  @Output() editEmitter = new EventEmitter<boolean>();
  eduItem: Education;
  form: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('education').select('education').subscribe(
      (res: Education[]) => this.eduItem = res[this.index]
    );
    if (this.index > -1) {
      this.setValues();
    }else {
      this.formInit();
    }
  }

  formInit() {
    this.form = new FormGroup({
      school: new FormControl(null, Validators.required),
      faculty: new FormControl(null, Validators.required),
      specialization: new FormControl(null, Validators.required),
      logo: new FormControl(),
      type: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      courses: new FormArray([])
    });
  }

  setValues() {
    const courses = new FormArray([]);
    if (this.eduItem['courses']) {
      for (const course of this.eduItem.courses) {
        courses.push(
          new FormGroup({
            courseName: new FormControl(course.courseName),
            description: new FormControl(course.description),
            mark: new FormControl(course.mark)
          })
        );
      }
    }

    this.form = new FormGroup({
      school: new FormControl(this.eduItem.school, Validators.required),
      faculty: new FormControl(this.eduItem.faculty, Validators.required),
      specialization: new FormControl(this.eduItem.specialization, Validators.required),
      logo: new FormControl(this.eduItem.logo),
      type: new FormControl(this.eduItem.type),
      startDate: new FormControl(this.eduItem.startDate),
      endDate: new FormControl(this.eduItem.endDate),
      courses: courses
    });
  }

  addCourseField() {
    (<FormArray>this.form.get('courses')).push(new FormGroup({
      courseName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      mark: new FormControl(null, Validators.required)
    }));
  }

  getControls() {
    return (<FormArray>this.form.get('courses')).controls;
  }

  deleteCourse(i: number) {
    (<FormArray>this.form.get('courses')).removeAt(i);
  }

  onSubmit() {
    if (this.index > -1) {
      this.store.dispatch(new UpdateEdu({index: this.index, item: this.form.value}));
    }else {
      this.store.dispatch(new AddEdu(this.form.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.editEmitter.emit(false);
  }


}
