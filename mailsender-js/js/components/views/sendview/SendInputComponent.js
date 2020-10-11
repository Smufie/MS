import inputData from '../../../../templates/template-datas/input-template-datas/send-input-data.json';
import compiledTemplate from '../../../../templates/input-templates/sendInputTemplate.hbs';

export default class SendInputComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }
}
