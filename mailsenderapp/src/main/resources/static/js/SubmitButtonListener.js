import { handleAddResponse as handleResponse } from './reponseHandler.js'
import { establishAddHttpRequest as establishHttpRequest } from './httpRequestEstablisher.js'
import { PersonData } from './PersonData.js'

export class SubmitButtonListener {
    constructor() {
        const submitButton = document.getElementById('submit-button');
        submitButton.addEventListener('click', this.addPerson);
    }

    addPerson() {
        const nameInputField = document.getElementById('name-input');
        const newPersonData = new PersonData(nameInputField.value);
        let xhr = establishHttpRequest();
        xhr.onreadystatechange = function() {
            handleResponse(xhr, newPersonData);
        };
        xhr.send(JSON.stringify(newPersonData));
        nameInputField.value = '';
    }
}