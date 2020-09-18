/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import AddButtonListener from './AddButtonListener';
import AddInputComponent from './AddInputComponent';

export default class AddPersonView {
    constructor() {
        this.container = InputContainerFactory.getAddPersonContainer();
        this.input = new AddInputComponent();
    }

    attachInputToContainer() {
        const contentSpace = document.getElementById('input-content-space');
        contentSpace.innerHTML += this.input.generatedHTML;
        return contentSpace.innerHTML;
    }

    renderTo(article) {
        article.innerHTML = this.container.generatedHTML;
        article.id = this.container.id;
        this.attachInputToContainer();
        listenAddButton();
        return article.innerHTML;
    }
}

function listenAddButton() {
    const addButtonListener = new AddButtonListener();
    addButtonListener.listen();
}
