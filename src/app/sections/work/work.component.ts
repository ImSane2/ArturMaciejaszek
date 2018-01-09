import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import { Work } from './work.model';

import * as WorkActions from './store/work.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromWork from './store/work.reducers';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workState: Observable<fromWork.State>;
  editMode: Observable<boolean>;
  editOn = false;
  i = 0;
  resps = [this.i];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.workState = this.store.select('work');
    this.editMode = this.store.select('authenticated').select('authenticated');
  }

  addResp() {
    this.resps.push(this.i += 1);
  }
  deleteResp(index: number) {
      this.resps.splice(index, 1);
  }
  onSubmit(form: NgForm) {
    const json = form.value.responsibilities;
    const resps = Object.keys(json).map(function(k) { return json[k]; });
    this.store.select('work').select('work').dispatch(new WorkActions.AddItem(
      new Work(
        form.value.company,
        form.value.cLogo,
        form.value.startDate,
        form.value.endDate,
        form.value.position,
        resps)
    ));
    console.log(form.value);
    this.cancelAddItem();
  }
  cancelAddItem() {
    this.resps = [0];
    this.editOn = false;
  }

}
