/* eslint-disable no-param-reassign */
import InputContainerFactory from '../../../containers/InputContainerFactory';
import AddButtonListener from './AddButtonListener';
import AddInputComponent from './AddInputComponent';
import InterestCheckbox from '../InterestCheckbox';

export default class AddPersonView {
	constructor() {
		this.container = InputContainerFactory.getAddPersonContainer();
		this.input = new AddInputComponent();
		this.checkbox = new InterestCheckbox();
		window.interestDataObserver.subscribe(this.checkbox);
	}

	renderTo(target) {
		target.innerHTML = this.container.generatedHTML;
		target.id = this.container.id;
		attachInputToContainer(this.input);
		renderCheckboxToContainer();
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

function renderCheckboxToContainer() {
	window.fetchObserver.requestArrived('getinterests', window.interestDataObserver);
}
