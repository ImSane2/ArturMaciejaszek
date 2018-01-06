import { Social } from '../../sections/contact/social.model';


export interface State {
    name: string;
    greeting: string;
    socials: Social[];
}

const initialState = {
    name: 'Artur Roman Maciejaszek',
    greeting: 'Foremost I would like to thank you for taking interest in this side.' +
                 'I hope that you will like the content ... blah blah blah' +
                 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae exercitationem'
                 + 'quam aspernatur vero, delectus fugiat tenetur? Itaque modi eaque illum ex dicta, repellendus'
                 + 'eius ad explicabo omnis adipisci iusto.',
    socials: [
        new Social('skype', 'fa fa-skype', 'placeholder'),
        new Social('facebook', 'fa fa-facebook', 'facebook.com'),
        new Social('linkedIn', 'fa fa-linkedin', 'placeholder'),
        new Social('gitHub', 'fa fa-github', 'placeholder')
    ]
};

export function BasicInfoReducers(state = initialState, action) {
    return state;
}
