/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import InterestDataObserver from '../../../InterestDataObserver';
import InterestCheckbox from '../InterestCheckbox';
import SendInputComponent from './SendInputComponent';

export default class SendView {
    constructor() {
        this.container = InputContainerFactory.getSendContainer();
        this.input = new SendInputComponent();
        this.checkbox = new InterestCheckbox();
        this.observer = new InterestDataObserver();
        this.observer.subscribe(this.checkbox);
    }

    renderTo(target) {
        target.innerHTML = this.container.generatedHTML;
        target.id = this.container.id;
        attachInputToContainer(this.input);
        this.renderCheckboxToContainer();
        return target.innerHTML;
    }

    renderCheckboxToContainer() {
        window.fetchObserver.requestArrived('getinterests', this.observer);
    }
}

function attachInputToContainer(input) {
    const contentSpace = document.getElementById('input-content-space');
    contentSpace.innerHTML += input.generatedHTML;
    return contentSpace.innerHTML;
}
