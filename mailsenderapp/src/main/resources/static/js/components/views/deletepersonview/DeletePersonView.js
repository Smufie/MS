/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import DeleteInputComponent from './DeleteInputComponent';

export default class DeletePersonView {
    constructor() {
        this.container = InputContainerFactory.getDeletePersonContainer();
        this.input = new DeleteInputComponent();
    }

    attachInputToContainer() {
        document.getElementById('input-content-space').innerHTML += this.input.generatedHTML;
    }

    renderTo(article) {
        article.innerHTML = this.container.generatedHTML;
        article.id = this.container.id;
        this.attachInputToContainer();
    }
}
