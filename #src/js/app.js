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

    

})  