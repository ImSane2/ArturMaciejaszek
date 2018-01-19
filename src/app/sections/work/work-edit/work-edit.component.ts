import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Work } from '../work.model';

import { UpdateWork, AddWork } from '../store/work.actions';
import * as fromWork from '../store/work.reducers';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.scss']
})
export class WorkEditComponent implements OnInit {
  @Input() index: number;
  @Output() editEmitter = new EventEmitter<boolean>();
  workItem: Work;
  form: FormGroup;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('work').select('work').subscribe(
      res => this.workItem = res[this.index]
    );
    if (this.index > -1) {
      this.setValues();
    }else {
      this.formInit();
    }
  }

  setValues() {
    const resps = new FormArray([]);
    if (this.workItem['responsibilities']) {
      for (const resp of this.workItem.responsibilities) {
        resps.push(new FormControl(resp));
      }
    }

    this.form = new FormGroup({
      company: new FormControl(this.workItem.company, Validators.required),
      cLogo: new FormControl(this.workItem.cLogo),
      startDate: new FormControl(this.workItem.startDate, Validators.required),
      endDate: new FormControl(this.workItem.endDate, Validators.required),
      position: new FormControl(this.workItem.position, Validators.required),
      responsibilities: resps
    });
  }

  formInit() {
    this.form = new FormGroup({
      company: new FormControl(null, Validators.required),
      cLogo: new FormControl(),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      responsibilities: new FormArray([])
    });
  }

  getControls() {
    return (<FormArray>this.form.get('responsibilities')).controls;
  }

  addResp() {
    (<FormArray>this.form.get('responsibilities')).push(new FormControl());
  }

  deleteResp(i: number) {
    (<FormArray>this.form.get('responsibilities')).removeAt(i);
  }

  onSubmit() {
    if (this.index > -1) {
      this.store.dispatch(new UpdateWork({index: this.index, item: this.form.value}));
    }else {
      this.store.dispatch(new AddWork(this.form.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.editEmitter.emit(false);
  }

}
