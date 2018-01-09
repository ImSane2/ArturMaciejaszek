import { Work } from './../work.model';

import * as WorkActions from '../store/work.actions';

export interface State {
    work: Work[];
}
// FIX DATES THEY ARE WRONG
const initialState = {
    work: [
        new Work(
            'World Trade Center Poznań',
            './assets/logos/wtc_poznan.png',
            new Date(2012, 2),
            new Date(2017, 5),
            'promoter/host',
            ['representing companies on trade fairs',
            'supporting events and marketing campaigns',
            'conducting marketing research on the fairground (collecting data)']
        ),
        new Work(
            'UTE Group',
            './assets/logos/ute2.png',
            new Date(2016, 3),
            new Date(2016, 8),
            'junior account manager',
            ['conceptual and technical preparation of offers',
            'contact with Polish and International contractors',
            'representing company on trade fairs']
        ),
        new Work(
            'Poznań International Fair',
            './assets/logos/mtp2.svg',
            new Date(2012, 9),
            new Date(2013, 12),
            'technical staff',
            ['preparating and ensuring proper conduct of events']
        ),
        new Work(
            'Poznań University of Economics',
            './assets/logos/uep-green.svg',
            new Date(2011, 11),
            new Date(2012, 2),
            'trainee',
            ['writing scientific report regarding mechanisms that motivate users for a long-term use of web applications']
        )
    ]
};

export function WorkReducers(state = initialState, action: WorkActions.WorkActions) {
    switch (action.type) {
        case WorkActions.ADD_ITEM:
            return {
                ...state,
                work: [...state.work, action.payload]
            };
        // case WorkActions.UPDATE_ITEM:
        //     const targetItem = state.work[action.payload.index];

        //     return {};
        // case WorkActions.DELETE_ITEM:
        //     return {};
        default:
            return state;
    }
}
