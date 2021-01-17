/* eslint-disable no-restricted-globals */

import ExceptionHandler from '../../../ExceptionHandler';

export default class DeleteInterestButtonListener {
	constructor() {
		this.deleteInterestButton = document.getElementById('interest-delete-button');
	}

	listen() {
		this.deleteInterestButton.addEventListener('click', (event) => {
			deleteButtonClicked(event);
		});
	}
}

function deleteButtonClicked(event) {
	const inputField = document.getElementById('interest-id-input');
	if (isNumeric(inputField.value)) {
		const inputFieldValue = parseInt(inputField.value, 10);
		inputField.value = '';
		event.target.blur();
		window.fetchObserver.requestArrived('deleteinterest', inputFieldValue);
	} else {
		ExceptionHandler.error('ERROR: Typed ID has to be a number.');
		event.target.blur();
	}
}

function isNumeric(str) {
	if (typeof str !== 'string') return false;
	return !isNaN(str) && !isNaN(parseFloat(str));
}
