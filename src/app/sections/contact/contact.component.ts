import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Social } from './social-item/social.model';

import * as fromBasicInfo from '../../shared/store/basic-info.reducers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  socialState: Observable<Social[]>;

  constructor(private store: Store<fromBasicInfo.State>) { }

  ngOnInit() {
    this.socialState = this.store.select('socials');
  }

}
