import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';

import * as fromProjects from './store/projects.reducers';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsState: Observable<Project[]>;

  constructor(private store: Store<fromProjects.State>) { }

  ngOnInit() {
    this.projectsState = this.store.select('projects');
  }

}
