import inputData from '../../../../templates/template-datas/input-template-datas/add-person-input-data.json';
import compiledTemplate from '../../../../templates/input-templates/basicInputTemplate.hbs';

export default class AddInputComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }
}
