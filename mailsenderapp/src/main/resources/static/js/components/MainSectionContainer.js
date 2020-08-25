import mainSectionData from '../../mainsectiondata.json';
import compiledTemplate from '../../templates/mainSectionTemplate.hbs';

export default class MainSectionContainer {
    constructor() {
        const generatedHTML = compiledTemplate(mainSectionData);
        const menuContainer = document.getElementById('main-section');
        menuContainer.innerHTML = generatedHTML;
    }
}
