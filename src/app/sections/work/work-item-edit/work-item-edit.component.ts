import { Store } from '@ngrx/store';
import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Work } from '../work.model';

import * as WorkActions from './../store/work.actions';
import * as fromWork from '../store/work.reducers';

@Component({
  selector: 'app-work-item-edit',
  templateUrl: './work-item-edit.component.html',
  styleUrls: ['./work-item-edit.component.scss']
})
export class WorkItemEditComponent implements OnInit {
  @Input() workItem = new Work('', '', null, null, '', []);
  @Output() editEmitter = new EventEmitter<boolean>();
  @Input() index: number;
  resps: string[];
  resp: string;
  startDate: string;
  endDate: string;

  constructor(private store: Store<fromWork.State>) {}

  ngOnInit() {
    this.resps = this.workItem.responsibilities.slice();
    if (this.workItem.startDate !== null) {
      this.startDate = this.workItem.startDate.toISOString().split('T')[0];
      this.endDate = this.workItem.endDate.toISOString().split('T')[0];
    }
  }
  addResp() {
    this.resps.push(this.resp);
    console.log(this.resps);
  }
  // BUGGY AS FUCK guess it has to do with the loop
  deleteResp(i: number) {
    this.resps.splice(i, 1);
    // this.resps = this.resps.filter( index => this.resps[index]  );
    // this.resps.splice(index, 1);
    // console.log(this.resps.indexOf());
    console.log(this.resps);
  }
  onSubmit(form: NgForm) {
    const json = form.value.responsibilities;
    const resps = Object.keys(json).map(function(k) { return json[k]; });
    const newItem = new Work(
      form.value.company,
      form.value.cLogo,
      form.value.startDate,
      form.value.endDate,
      form.value.position,
      resps);
    if (this.workItem.company === '') {
      this.store.select('work').dispatch(new WorkActions.AddItem(newItem));
    } else {
      this.store.select('work').dispatch(new WorkActions.UpdateItem({index: this.index , item: newItem}));
    }
    console.log(form.value);
    this.cancelAddItem();
  }
  cancelAddItem() {
    this.editEmitter.emit(false);
  }

}
