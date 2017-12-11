import { Project } from '../project.model';

export interface State {
    projects: Project[];
}

const initialState = {
    projects: [
        new Project(
            'My CV',
            'placeholder link'
        )
    ]
};

export function ProjectReducers(state = initialState, action) {
    return state;
}
