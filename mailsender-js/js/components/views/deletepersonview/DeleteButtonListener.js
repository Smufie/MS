/* eslint-disable no-restricted-globals */

import ExceptionHandler from "../../../ExceptionHandler"

export default class DeleteButtonListener {
    constructor() {
        this.deleteButton = document.getElementById('delete-button');
    }

    listen() {
        this.deleteButton.addEventListener('click', (event) => {
            deleteButtonClicked(event);
        });
    }
}

function deleteButtonClicked(event) {
    const inputField = document.getElementById('id-input');
    if (isNumeric(inputField.value)) {
        const inputFieldValue = parseInt(inputField.value, 10);
        inputField.value = '';
        event.target.blur();
        window.fetchObserver.requestArrived('deleteperson', inputFieldValue);
    } else {
        ExceptionHandler.error('ERROR: Typed ID has to be a number.')
        inputField.value = '';
        event.target.blur();
    }
}

function isNumeric(str) {
    if (typeof str !== "string") return false  
    return !isNaN(str) && 
           !isNaN(parseFloat(str))
}