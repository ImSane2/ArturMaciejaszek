import { Course } from './../course.model';
import { Store } from '@ngrx/store';
import { Education } from './../edu.model';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, stagger, animate, style, keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../../../auth/auth.reducers';
import * as fromApp from '../../../store/app.reducers';
import { DeleteItem } from '../store/edu.actions';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.scss'],
  animations: [
    trigger(
      'listIn',
      [
        transition(
        ':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('800ms', style({transform: 'scale(1)', 'opacity': 1}))
        ]
      ),
        transition(
        ':leave', [
          style({transform: 'scale(1)', 'opacity': 1}),
          animate('800ms', style({transform: 'scale(0)', 'opacity': 0}))
        ]
      )]
    )
  ]
})
export class EduItemComponent implements OnInit {
  @Input() eduItem: Education;
  @Input() index: number;
  coursesArray: Course[];
  editMode: Observable<fromAuth.State>;
  itemToggle = false;
  editable = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
    this.coursesArray = this.eduItem.courses.slice();
  }

  startEdit() {
    this.editable = !this.editable;
  }

  deleteItem() {
    this.store.dispatch(new DeleteItem(this.index));
  }

  cancelAddItem() {
    this.coursesArray = this.eduItem.courses.slice();
    this.editable = false;
  }

  deleteCourse(i: number) {
    this.coursesArray.splice(i, 1);
  }

  addCourseField() {
    this.coursesArray.push(new Course('', null, '', []));
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
