import { establishMenuDataHttpRequest as establishHttpRequest } from "./httpRequestEstablisher.js"
import menudata from '../menudata.json'

export function getMenu() {
    debugger;
    console.log(menudata);
    let xhr = establishHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let menuData = JSON.parse(this.responseText);            
            let rawTemplate = document.getElementById('menu-template');
            let compiledTemplate = Handlebars.compile(rawTemplate);
            let generatedHTML = compiledTemplate(menuData);
            let menuContainer = document.getElementById('menu');
            menuContainer.innerHTML = generatedHTML;
        }
    }
    xhr.send();
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