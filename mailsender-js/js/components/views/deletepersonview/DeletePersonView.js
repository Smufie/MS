/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import DeleteInputComponent from './DeleteInputComponent';

export default class DeletePersonView {
    constructor() {
        this.container = InputContainerFactory.getDeletePersonContainer();
        this.input = new DeleteInputComponent();
    }

    renderTo(target) {
        target.innerHTML = this.container.generatedHTML;
        target.id = this.container.id;
        attachInputToContainer(this.input);
        return target.innerHTML;
    }
}

function attachInputToContainer(input) {
    const contentSpace = document.getElementById('input-content-space');
    contentSpace.innerHTML += input.generatedHTML;
    return contentSpace.innerHTML;
}
