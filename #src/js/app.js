import * as flsFuncs from './modules/functions.js';




document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    //pages
    //ТУТ БУДЕТ СЕЛЕКТОРЫ ВСЕХ СТРАНИЦ ЧТОБЫ КАЖДЫЙ РАЗ НЕ ОБЬЯВЛЯТЬ ПЕРЕМЕННУЮ
    const preload = document.querySelector('.preload')
    const homePage = document.querySelector('.home')
    const pricingPage = document.querySelector('.pricing')
    const locationPage = document.querySelector('.location')
    const settings = document.querySelector('.settings');
    const rep = document.querySelector('.rep')


    const hidePreload = () => {
        setInterval(() => {
            preload.classList.remove('active')
            homePage.classList.remove('hide-right');
        }, 4000)
    }


    //call pricing window
    const callPricingWindow = () => {
        const btn = document.querySelector('.home__item-tr');
        if(btn && pricingPage) {
            btn.addEventListener('click', () => {
                pricingPage.classList.add('active');
                homePage.classList.add('hide-right');
            })
        }
    }

    const hidePricingWindow = () => {
        const btn = document.querySelector('.pricing__top_back');
        if(btn && pricingPage) {
            btn.addEventListener('click', () => {
                pricingPage.classList.remove('active')
                homePage.classList.remove('hide-right');   
            })
        }
    }

    const callLocation = () => {
        const btn = document.querySelector('.home__item-loc')
        btn.addEventListener('click', () => {
            homePage.classList.add('hide-right')
            locationPage.classList.add('active')
        })
    }

    const hideLocation = () => {
        const btn = document.querySelector('.location__action_back')
        btn.addEventListener('click', () => {
            homePage.classList.remove('hide-right')
            locationPage.classList.remove('active')
        })
    }

    const callSettings = () => {
        const btn = document.querySelector('.homeCenter__settings');
        btn.addEventListener('click', () => {
            homePage.classList.add('hide-right')
            settings.classList.add('active')
        })
    }

    const hideSettings = () => {
        const btn = document.querySelector('.settings__close');
        btn.addEventListener('click', () => {
            homePage.classList.remove('hide-right')
            settings.classList.remove('active')
        })
    }

    const callRep = () => {
        const btn = document.querySelector('.home__item-balance_btn')
        btn.addEventListener('click', () => {
            homePage.classList.add('hide-right')
            rep.classList.add('active');
        })
    }

    const hideRep = () => {
        const btn = document.querySelector('.rep__close');
        btn.addEventListener('click', () => {
            homePage.classList.remove('hide-right')
            rep.classList.remove('active');
        })
    }

    
    callPricingWindow();
    hidePricingWindow();
    
    callLocation();
    hideLocation();

    callSettings();
    hideSettings();


    callRep();
    hideRep();

    hidePreload();

})