import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/auth.reducers';
import * as fromEdu from '../sections/education/store/edu.reducers';
import * as fromSkills from '../sections/skills/store/skills.reducers';
import * as fromWork from '../sections/work/store/work.reducers';
import * as fromProjects from '../sections/projects/store/projects.reducers';
import * as fromBasicInfo from '../shared/store/basic-info.reducers';

export interface AppState {
    token: fromAuth.State;
    authenticated: fromAuth.State;
    education: fromEdu.State;
    skills: fromSkills.State;
    work: fromWork.State;
    projects: fromProjects.State;
    name: fromBasicInfo.State;
    greeting: fromBasicInfo.State;
    socials: fromBasicInfo.State;
}

export const reducers: ActionReducerMap<AppState> = {
    token: fromAuth.AuthReducers,
    authenticated: fromAuth.AuthReducers,
    education: fromEdu.EduReducers,
    skills: fromSkills.SkillsReducers,
    work: fromWork.WorkReducers,
    projects: fromProjects.ProjectReducers,
    name: fromBasicInfo.BasicInfoReducers,
    greeting: fromBasicInfo.BasicInfoReducers,
    socials: fromBasicInfo.BasicInfoReducers
};
