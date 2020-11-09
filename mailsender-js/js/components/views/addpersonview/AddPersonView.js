/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import AddButtonListener from './AddButtonListener';
import AddInputComponent from './AddInputComponent';
import InterestCheckbox from '../InterestCheckbox';
import InterestDataObserver from '../../../InterestDataObserver'

export default class AddPersonView {
    constructor() {
        this.container = InputContainerFactory.getAddPersonContainer();
        this.input = new AddInputComponent();
        this.checkbox = new InterestCheckbox();
        this.observer = new InterestDataObserver();
        this.observer.subscribe(this.checkbox);
    }

    renderTo(target) {
        target.innerHTML = this.container.generatedHTML;
        target.id = this.container.id;
        attachInputToContainer(this.input);
        this.renderCheckboxToContainer();
        listenAddButton();
        return target.innerHTML;
    }

    renderCheckboxToContainer() {
        window.fetchObserver.requestArrived('getinterests', this.observer);
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