import inputData from '../../templates/template-datas/default-input-data.json';
import compiledTemplate from '../../templates/inputTemplate.hbs';

export default class DefaultInputComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }

    renderTo(article) {
        // eslint-disable-next-line no-param-reassign
        article.innerHTML = this.generatedHTML;
    }
}
