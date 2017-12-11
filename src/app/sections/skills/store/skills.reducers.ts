import { Skill } from './../skill.model';

export interface State {
    skills: Skill[];
}

const initialState = {
    skills: [
        new Skill(
            'english', [2, 2, 2],
            'I am not certified but I believe myself to be at C1 proficency by CEFR standard.' +
            'I have experience working in an Incentive Travel department where daily communication' +
            'in english with people from all over the world was my bread and butter. I have no trouble' +
            'comprehending technical language and documentation in this language',
            ['english', 'language', 'communication', 'multicultural']
        ),
        new Skill(
            'spanish', [1, 1, 0],
            'Self-tought via memrise and duolingo apps :) I know many words but have o experience using the' +
            'language. I can understand a lot and convey an easy message, but using it live is way out of my level',
            ['spanish', 'language', 'communication', 'multicultural']
        ),
        new Skill(
            'french', [1, 0, 0],
            'Self-tought via memrise and duolingo apps :) I some words and i keep improving my vocabulary, ' +
            'but it is more for reading and writing than heaving an actual conversation',
            ['french', 'language', 'communication', 'multicultural']
        ),
        new Skill(
            'polish', [2, 2, 2],
            'My native language. \'Nuff said',
            ['polish', 'language', 'communication', 'multicultural']
        ),
        new Skill(
            'HTML5', [1, 0, 0],
            'You can see my work here',
            ['html', 'html5', 'programming', 'frontend', 'front-end']
        ),
        new Skill(
            'CSS3', [1, 0, 0],
            'You can see my work here',
            ['css', 'css3', 'programming', 'design', 'frontend', 'front-end']
        ),
        new Skill(
            'JavaScript', [1, 0, 0],
            'You can see my work here',
            ['javascript', 'programming', 'frontend', 'front-end']
        ),
        new Skill(
            'Angular 5', [1, 1, 0],
            'You can see my work here',
            ['angular', 'angular5', 'programming', 'frontend', 'front-end'],
            'fab fa-angular'
        ),
        new Skill(
            'Sass', [1, 0, 0],
            'You can see my work here',
            ['sass', 'css', 'programming', 'design', 'frontend', 'front-end']
        ),
        new Skill(
            'Adobe Photoshop', [1, 0, 0],
            'You can see my work here',
            ['adobe', 'photoshop', 'graphic', 'design']
        ),
        new Skill(
            'MS Word', [2, 1, 0],
            'You can see my work here',
            ['word', 'microsoft', 'msword', 'texteditor', 'text']
        ),
        new Skill(
            'MS Excel', [2, 2, 0],
            'You can see my work here',
            ['excel', 'microsoft', 'msexcel']
        ),
        new Skill(
            'MS PowerPoint', [2, 0, 0],
            'You can see my work here',
            ['powerpoint', 'presentation', 'microsoft']
        ),
        new Skill(
            'LateX', [2, 0, 0],
            'You can see my work here',
            ['latex', 'text', 'texteditor']
        ),
        new Skill(
            'TypeScript', [2, 1, 0],
            'You can see my work here',
            ['typescript', 'programming', 'frontend', 'front-end']
        ),
        new Skill(
            'MS SharePoint', [2, 0, 0],
            'Experience as an user',
            ['sharepoint', 'microsoft', 'mssharepoint', 'workflow']
        ),
        new Skill(
            'SQL', [1, 1, 0],
            'Academic knowledge',
            ['query', 'sql', 'backend', 'back-end', 'database']
        ),
        new Skill(
            'Git', [2, 0, 0],
            'I do some control but have no experience working with others',
            ['git', 'versioncontrol', 'control', 'repository']
        ),
        new Skill(
            'Redux(NgRx)', [2, 1, 0],
            'Trying to use it even when it\'s not needed',
            ['redux', 'ngrx', 'optimalization']
        ),
        new Skill(
            'node.js', [0, 0, 0],
            'gonna learn',
            ['node', 'node.js', 'nodejs', 'backend', 'back-end']
        ),
        new Skill(
            'Adobe Illustrator', [0, 0, 0],
            'gonna learn',
            ['adobe', 'illustrator', 'design', 'graphic']
        )
    ]
};

export function SkillsReducers(state= initialState, action) {
    return state;
}



