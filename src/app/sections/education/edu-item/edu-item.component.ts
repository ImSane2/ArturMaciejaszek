import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, stagger, animate, style, keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Education } from './../edu.model';

import * as fromAuth from '../../../auth/auth.reducers';
import * as fromApp from '../../../store/app.reducers';
import { DeleteEdu } from '../store/edu.actions';

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
  editMode: Observable<fromAuth.State>;
  itemToggle = false;
  editOn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.editMode = this.store.select('authenticated');
  }

  startEdit() {
    this.editOn = !this.editOn;
  }

  deleteItem() {
    this.store.dispatch(new DeleteEdu(this.index));
  }

  setEdit(e) {
    this.editOn = e;
  }

}
