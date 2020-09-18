import inputData from '../../../../templates/template-datas/input-template-datas/delete-person-input-data.json';
import compiledTemplate from '../../../../templates/input-templates/basicInputTemplate.hbs';

export default class DeleteInputComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }
}
