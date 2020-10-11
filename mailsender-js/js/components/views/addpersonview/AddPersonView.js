/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import AddButtonListener from './AddButtonListener';
import AddInputComponent from './AddInputComponent';

export default class AddPersonView {
    constructor() {
        this.container = InputContainerFactory.getAddPersonContainer();
        this.input = new AddInputComponent();
    }

    renderTo(target) {
        target.innerHTML = this.container.generatedHTML;
        target.id = this.container.id;
        attachInputToContainer(this.input);
        listenAddButton();
        return target.innerHTML;
    }
}

function listenAddButton() {
    const addButtonListener = new AddButtonListener();
    addButtonListener.listen();
}

function attachInputToContainer(input) {
    const contentSpace = document.getElementById('input-content-space');
    contentSpace.innerHTML += input.generatedHTML;
    return contentSpace.innerHTML;
}
