import * as flsFuncs from './modules/functions.js';
// import Atropos from 'atropos';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    
    const parallax = new Atropos({
        el: '.test-parallax',
        shadow: false,
        // highlight: false,
        // alwaysActive: true,
        rotateXMax: 2,
        rotateYMax: 2
    })

    

    const goToSub = () => {
        const btn = document.querySelector('.config__head_ex');
        const configPage = document.querySelector('.config');
        const subPage = document.querySelector('.spricing');
        const back = document.querySelector('.spricing__top_label_gf');

        btn.addEventListener('click', () => {
            configPage.classList.remove('active');
            subPage.classList.add('active')
        })

        back.addEventListener('click', () => {
            configPage.classList.add('active')
            subPage.classList.remove('active')
        })
    }

    const goToSettings = () => {
        const btn = document.querySelector('.spricing__top_toggle_btn');
        const subPage = document.querySelector('.spricing');
        const settingsPage = document.querySelector('.settings');
        const back = document.querySelector('.settings__action_item-bc');

        
        btn.addEventListener('click', () => {
            subPage.classList.remove('active')
            settingsPage.classList.add('active')
        })

        back.addEventListener('click', () => {
            settingsPage.classList.remove('active')
            subPage.classList.add('active')
        })
    }

    goToSub()
    goToSettings()
})  