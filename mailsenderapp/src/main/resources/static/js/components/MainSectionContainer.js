import mainSectionData from '../../mainsectiondata.json'
const Handlebars = require('handlebars');

export class MainSectionContainer {    
    constructor() {
        let rawTemplate = document.getElementById('main-section-template').innerHTML;
        let compiledTemplate = Handlebars.compile(rawTemplate);
        let generatedHTML = compiledTemplate(mainSectionData);
        let menuContainer = document.getElementById('main-section');
        menuContainer.innerHTML = generatedHTML;
    }
}