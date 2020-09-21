/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import SendInputComponent from './SendInputComponent';

export default class SendView {
    constructor() {
        this.container = InputContainerFactory.getSendContainer();
        this.input = new SendInputComponent();
    }

    attachInputToContainer() {
        document.getElementById('input-content-space').innerHTML += this.input.generatedHTML;
    }

    renderTo(target) {
        target.innerHTML = this.container.generatedHTML;
        target.id = this.container.id;
        this.attachInputToContainer();
    }
}
