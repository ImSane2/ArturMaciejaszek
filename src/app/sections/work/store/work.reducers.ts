import { Work } from './../work.model';

export interface State {
    work: Work[];
}

const initialState = {
    work: [
        new Work(
            'World Trade Center Poznań',
            'placeholder',
            new Date(2012, 2),
            new Date(2017, 5),
            'promoter\\host',
            ['representing companies on trade fairs',
            'supporting events and marketing campaigns',
            'conducting marketing research on the fairground (collecting data)']
        ),
        new Work(
            'UTE Group',
            'placeholder',
            new Date(2016, 3),
            new Date(2016, 8),
            'junior account manager',
            ['conceptual and technical preparation of offers',
            'contact with Polish and International contractors',
            'representing company on trade fairs']
        ),
        new Work(
            'Poznań International Fair',
            'placeholder',
            new Date(2012, 9),
            new Date(2013, 12),
            'technical staff',
            ['preparating and ensuring proper conduct of events']
        ),
        new Work(
            'PDMG Marketing Group',
            'placeholder',
            new Date(2011, 11),
            new Date(2012, 2),
            'trainee',
            ['writing scientific description regarding mechanisms that motivate users for a long-term use of web aplications']
        )
    ]
};

export function WorkReducers(state = initialState, action) {
    return state;
}