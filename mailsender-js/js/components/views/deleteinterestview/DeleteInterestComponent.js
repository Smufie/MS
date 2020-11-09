import inputData from '../../../../templates/template-datas/input-template-datas/delete-interest-input-data.json';
import compiledTemplate from '../../../../templates/input-templates/basicInputTemplate.hbs';

export default class DeleteInterestComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }
}