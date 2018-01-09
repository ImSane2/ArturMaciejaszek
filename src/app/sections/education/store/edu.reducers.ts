import { Course } from './../course.model';
import { Education } from './../edu.model';
// import * as EduActions from './edu.actions';
// import * as fromApp from '../../../store/app.reducers';

// export interface FeaturedState extends fromApp.AppState {
//     education: State;
// }

export interface State {
    education: Education[];
}

const initialState = {
    education: [
        new Education(
            'Poznań University of Economics',
            './assets/logos/uep-green.svg',
            new Date(2013, 9),
            new Date(2015, 7),
            'master',
            'Management',
            'Business Communication',
            [
                new Course(
                    'Economic Doctrines',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Managerial Economics',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Management Concepts',
                    5,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Civil and Commercial Law',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Economic Doctrines',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Managerial Economics',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Management Concepts',
                    5,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Civil and Commercial Law',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Economic Doctrines',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Managerial Economics',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Management Concepts',
                    5,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Civil and Commercial Law',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Economic Doctrines',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Managerial Economics',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Management Concepts',
                    5,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Civil and Commercial Law',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Economic Doctrines',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Managerial Economics',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Management Concepts',
                    5,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Civil and Commercial Law',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Economic Doctrines',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Managerial Economics',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Management Concepts',
                    5,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),
                new Course(
                    'Civil and Commercial Law',
                    4,
                    'Some description',
                    [
                        'i do not fuckin remember what it was all about'
                    ]
                ),

            ]
        ),
        new Education(
            'Poznań University of Economics',
            './assets/logos/uep-green.svg',
            new Date(2009, 9),
            new Date(2013, 7),
            'bachelor',
            'IT and Econometrics',
            'IT in Economy and Administration',
            []
        )
    ]
};

export function EduReducers(state = initialState, action) {
    return state;
}
