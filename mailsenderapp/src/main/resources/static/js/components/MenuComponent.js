import Handlebars from 'handlebars/runtime';
import menudata from '../../menudata.json';
import compiledTemplate from '../../templates/menuTemplate.hbs';

export default class MenuComponent {
    constructor() {
        const generatedHTML = compiledTemplate(menudata);
        const menuContainer = document.getElementById('menu');
        menuContainer.innerHTML = generatedHTML;
    }
}

function switchHelper(value, options) {
    this.switch_value = value;
    return options.fn(this);
}

function caseHelper(value, options) {
    // eslint-disable-next-line react/no-this-in-sfc
    if (value === this.switch_value) {
        return options.fn(this);
    }
    return null;
}

Handlebars.registerHelper('switch', switchHelper);
Handlebars.registerHelper('case', caseHelper);
