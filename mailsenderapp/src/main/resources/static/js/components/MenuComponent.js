import menudata from '../../menudata.json';
const Handlebars = require('handlebars');

export class MenuComponent {    
    constructor() {
        const rawTemplate = document.getElementById('menu-template').innerHTML;
        let compiledTemplate = Handlebars.compile(rawTemplate);
        const generatedHTML = compiledTemplate(menudata);
        const menuContainer = document.getElementById('menu');
        menuContainer.innerHTML = generatedHTML;
    }
}

Handlebars.registerHelper('switch', function(value, options) {
    this.switch_value = value;
    return options.fn(this);
});
  
Handlebars.registerHelper('case', function(value, options) {
    if (value == this.switch_value) {
      return options.fn(this);
    }
});