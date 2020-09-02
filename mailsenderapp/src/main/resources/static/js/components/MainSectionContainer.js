import mainSectionData from '../../templates/mainsectiondata.json';
import compiledTemplate from '../../templates/mainSectionTemplate.hbs';

export default class MainSectionContainer {
    constructor() {
        this.generatedHTML = compiledTemplate(mainSectionData);
    }

    inject() {
        const menuContainer = document.getElementById('main-section');
        menuContainer.innerHTML = this.generatedHTML;
    }
}
