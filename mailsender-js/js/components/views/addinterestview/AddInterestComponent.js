import inputData from '../../../../templates/template-datas/input-template-datas/add-interest-input-data.json';
import compiledTemplate from '../../../../templates/input-templates/basicInputTemplate.hbs';

export default class AddInterestComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }
}