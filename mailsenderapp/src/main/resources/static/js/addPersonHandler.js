import { handleAddResponse as handleResponse } from './reponseHandler.js'
import { establishAddHttpRequest as establishHttpRequest } from './httpRequestEstablisher.js'
import { personData } from './personData.js'

export function addPerson() {
    const nameInputField = document.getElementById('name-input');
    debugger;
    const newPersonData = new personData(nameInputField.value);
    let xhr = establishHttpRequest();
    xhr.onreadystatechange = function() {
        handleResponse(xhr, newPersonData);
    };
    xhr.send(JSON.stringify(newPersonData));
    clearNameInput(nameInputField);
}

function clearNameInput(nameInputField) {
    nameInputField.value = '';
}