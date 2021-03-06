import { Course } from './../course.model';
import { Education } from './../edu.model';

import * as EduActions from './edu.actions';

export interface State {
    education: Education[];
}

const initialState = {
    education: []
};


export function EduReducers(state = initialState, action: EduActions.EduActions) {
    switch (action.type) {
        case EduActions.ADD_EDU:
            return {
                ...state,
                education: [...state.education, action.payload]
            };
        case EduActions.UPDATE_EDU:
            const targetItem = state.education[action.payload.index];
            const updatedItem = action.payload.item;
            const newState = [...state.education];
            newState[action.payload.index] = updatedItem;
            return {
                ...state,
                education: newState
            };
        case EduActions.DELETE_EDU:
            const nState = [...state.education];
            nState.splice(action.payload, 1);
            return {
                ...state,
                education: nState
            };
        case EduActions.SET_EDU:
            const eduState = action.payload;
            return {
                ...state,
                education: eduState
            };
        default:
            return state;
    }
}

// const initialState = {
//     education: [
//         new Education(
//             'Poznań University of Economics',
//             './assets/logos/uep-green.svg',
//             new Date(2013, 9),
//             new Date(2015, 7),
//             'master',
//             'Management',
//             'Business Communication',
//             [
//                 new Course(
//                     'Economic Doctrines',
//                     4,
//                     'Some description'
//                 ),
//                 new Course(
//                     'Managerial Economics',
//                     4,
//                     'Some description'
//                 ),
//                 new Course(
//                     'Management Concepts',
//                     5,
//                     'Some description'
//                 ),
//                 new Course(
//                     'Civil and Commercial Law',
//                     4,
//                     'Some description'
//                 )
//             ]
//         ),
//         new Education(
//             'Poznań University of Economics',
//             './assets/logos/uep-green.svg',
//             new Date(2009, 9),
//             new Date(2013, 7),
//             'bachelor',
//             'IT and Econometrics',
//             'IT in Economy and Administration',
//             []
//         )
//     ]
// };
