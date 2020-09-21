/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import SendInputComponent from './SendInputComponent';

export default class SendView {
    constructor() {
        this.container = InputContainerFactory.getSendContainer();
        this.input = new SendInputComponent();
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
