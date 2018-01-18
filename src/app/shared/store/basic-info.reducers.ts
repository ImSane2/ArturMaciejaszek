import { Social } from '../../sections/contact/social.model';
import * as InfoActions from '../store/basic-info.actions';

export interface State {
    name: string;
    greeting: string;
    socials: Social[];
}

const initialState = {
    name: '',
    greeting: '',
    socials: []
};
// const initialState = {
//     name: 'Artur Roman Maciejaszek',
//     greeting: 'Foremost I would like to thank you for taking interest in this side.' +
//                  'I hope that you will like the content ... blah blah blah' +
//                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae exercitationem'
//                  + 'quam aspernatur vero, delectus fugiat tenetur? Itaque modi eaque illum ex dicta, repellendus'
//                  + 'eius ad explicabo omnis adipisci iusto.',
//     socials: [
//         new Social('skype', 'fa fa-skype', 'placeholder'),
//         new Social('facebook', 'fa fa-facebook', 'facebook.com'),
//         new Social('linkedIn', 'fa fa-linkedin', 'placeholder'),
//         new Social('gitHub', 'fa fa-github', 'placeholder')
//     ]
// };

export function BasicInfoReducers(state = initialState, action: InfoActions.InfoActions) {
    switch (action.type) {
        case InfoActions.ADD_SOCIAL:
            return {
                ...state,
                socials: [...state.socials, action.payload]
            };
        case InfoActions.UPDATE_INFO:
            const newName = action.payload.name;
            const newGretting = action.payload.greeting;
            return {
                ...state,
                name: newName,
                greeting: newGretting
            };
        case InfoActions.DELETE_SOCIAL:
            const nState = [...state.socials];
            nState.splice(action.payload, 1);
            return {
                ...state,
                socials: nState
            };
        case InfoActions.UPDATE_SOCIALS:
            const newSocials = action.payload;
            return {
                ...state,
                socials: newSocials
            };
        default:
            return state;
    }
}
