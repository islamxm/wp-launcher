import * as flsFuncs from './modules/functions.js';




document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    //pages
    //ТУТ БУДЕТ СЕЛЕКТОРЫ ВСЕХ СТРАНИЦ ЧТОБЫ КАЖДЫЙ РАЗ НЕ ОБЬЯВЛЯТЬ ПЕРЕМЕННУЮ
    const preload = document.querySelector('.preload')
    const homePage = document.querySelector('.home')
    const pricingPage = document.querySelector('.pricing')
    const locationPage = document.querySelector('.location')



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


    
    callPricingWindow();
    hidePricingWindow();
    
    callLocation();
    hideLocation();
})