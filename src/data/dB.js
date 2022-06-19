import { writable } from 'svelte/store';

export const dB = writable({
    projects: [
        {
            id: '01',
            image: 'img/project-svelte.png',
            title: 'Bread Manager',
            content: 'It is an svelte sapper aplication from my last job in a bakery, helps to make order and planing all the bread producction of the company',
            techs: ['svelte', 'firebase', 'pwa'],
            subTitle: 'web application',
        },
        {
            id: '02',
            image: 'img/project-ciapp.png',
            title: 'Inventory App',
            content: 'It s my UI/UX final project for my Google UX/UI certification, It about the research in how cafe and restaurants deal with the taks of make the inventory daily of theri ingredientes and products',
            techs: ['uxui', 'figma'],
            subTitle: 'final project certification',

        },
        {
            id:'03',
            image: 'img/react-component.png',
            title: 'React Prctice Component',
            content:'A react component to practice basic concepts like props, iteration, components; its about a simple loging page using hooks like useState, useReducer and tools like ESlint and proptypes library',
            techs: ['react', 'uxui', 'css'],
            subTitle: 'practice react component for login',
        }

    ],
    skills : [
        1,2,3,4,5
    ]
});