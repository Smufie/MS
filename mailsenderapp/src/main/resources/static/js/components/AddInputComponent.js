/* eslint-disable no-param-reassign */
import inputData from '../../templates/template-datas/add-person-input-data.json';
import compiledTemplate from '../../templates/inputTemplate.hbs';
import AddButtonListener from '../listeners/AddButtonListener';

export default class AddInputComponent {
    constructor() {
        this.generatedHTML = compiledTemplate(inputData);
    }

    renderTo(article) {
        article.innerHTML = this.generatedHTML;
        article.id = inputData.articleId;
        const addButtonListener = new AddButtonListener();
        addButtonListener.listen();
    }
}
