import { ActionReducerMap } from '@ngrx/store';

import * as fromEdu from '../sections/education/store/edu.reducers';
import * as fromSkills from '../sections/skills/store/skills.reducers';
import * as fromWork from '../sections/work/store/work.reducers';
import * as fromProjects from '../sections/projects/store/projects.reducers';
import * as fromBasicInfo from '../shared/store/basic-info.reducers';

export interface AppState {
    education: fromEdu.State;
    skills: fromSkills.State;
    work: fromWork.State;
    projects: fromProjects.State;
    name: fromBasicInfo.State;
    greeting: fromBasicInfo.State;
    socials: fromBasicInfo.State;
}

export const reducers: ActionReducerMap<AppState> = {
    education: fromEdu.EduReducers,
    skills: fromSkills.SkillsReducers,
    work: fromWork.WorkReducers,
    projects: fromProjects.ProjectReducers,
    name: fromBasicInfo.BasicInfoReducers,
    greeting: fromBasicInfo.BasicInfoReducers,
    socials: fromBasicInfo.BasicInfoReducers
};
