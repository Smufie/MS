/* eslint-disable no-param-reassign */
import inputData from '../../templates/template-datas/send-input-data.json';
import compiledTemplate from '../../templates/inputTemplate.hbs';

export default class SendInputComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }

    renderTo(article) {
        article.innerHTML = this.generatedHTML;
        article.id = inputData.articleId;
    }
}
