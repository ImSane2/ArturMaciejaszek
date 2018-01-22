import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Social } from '../sections/contact/social.model';

import { UpdateInfo } from './../shared/store/basic-info.actions';
import { SetWork } from './../sections/work/store/work.actions';
import { SetSkills } from './../sections/skills/store/skills.actions';
import { SetEdu } from '../sections/education/store/edu.actions';
import { Logout } from './../auth/auth.actions';

import * as fromBasicInfo from '../shared/store/basic-info.reducers';
import * as fromAuth from '../auth/auth.reducers';
import * as fromApp from '../store/app.reducers';
import * as fromEdu from '../sections/education/store/edu.reducers';
import * as fromWork from '../sections/work/store/work.reducers';
import * as fromSkills from '../sections/skills/store/skills.reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  editMode: Observable<fromAuth.State>;
  authState: fromAuth.State;
  infoState: fromBasicInfo.State;
  eduState: fromEdu.State;
  workState: fromWork.State;
  skillsState: fromSkills.State;
  currentUser: String;
  data: any;

  constructor( private store: Store<fromApp.AppState>,
                private http: Http,
                private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.currentUser = params.get('id') ? params.get('id') : 'arturmaciejaszek';
      console.log(this.currentUser);
      this.getData(this.currentUser).subscribe( (res) => {
        this.data = res.json();
        this.populateData(res);
      });
    });
    this.editMode = this.store.select('authenticated');
    this.store.select('token').subscribe( (res) => this.authState = res);
    this.store.select('name').subscribe( (res) => this.infoState = res);
    this.store.select('education').subscribe( (res) => this.eduState = res);
    this.store.select('work').subscribe( (res) => this.workState = res);
    this.store.select('skills').subscribe( (res) => this.skillsState = res);
  }

  getData(username) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/manager/get', {username: username}, {headers: headers});
  }

  populateData(data) {
    const dataParsed = data.json();
    this.store.dispatch(new UpdateInfo(dataParsed.data.info));
    this.store.dispatch(new SetWork(dataParsed.data.work));
    this.store.dispatch(new SetEdu(dataParsed.data.education));
    this.store.dispatch(new SetSkills(dataParsed.data.skills));
  }

  saveData() {
    const newData = {
      username: this.currentUser,
      data: {
        info: this.infoState,
        education: this.eduState.education,
        work: this.workState.work,
        skills: this.skillsState.skills
      }
    };
    console.log(this.currentUser);
    console.log(newData);
    this.saveCall(newData).subscribe((res) => console.log(res.json()));
  }

  saveCall(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authState.token);
    return this.http.put('http://localhost:3000/manager/save', data, {headers: headers});
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  discard() {
    // TEST BUTTON
  }

}
