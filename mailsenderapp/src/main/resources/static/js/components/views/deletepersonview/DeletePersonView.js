/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import DeleteInputComponent from './DeleteInputComponent';

export default class DeletePersonView {
    constructor() {
        this.container = InputContainerFactory.getDeletePersonContainer();
        this.input = new DeleteInputComponent();
    }

    renderTo(article) {
        // TODO refactor
        article.innerHTML = this.container.generatedHTML;
        article.id = this.container.id;
        document.getElementById('input-content-space').innerHTML += this.input.generatedHTML;
    }
}
