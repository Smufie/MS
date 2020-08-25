import { handleAddResponse as handleResponse } from './reponseHandler';
import { establishAddHttpRequest as establishHttpRequest } from './httpRequestEstablisher';
import PersonData from './PersonData';
import getPersonList from './allPersonsGetter';

export default class SubmitButtonListener {
    constructor() {
        const submitButton = document.getElementById('submit-button');
        submitButton.addEventListener('click', addPerson);
    }
}

function addPerson() {
    const nameInputField = document.getElementById('name-input');
    const newPersonData = new PersonData(nameInputField.value);
    const xhr = establishHttpRequest();
    xhr.onreadystatechange = () => {
        handleResponse(xhr, newPersonData);
        getPersonList();
    };
    xhr.send(JSON.stringify(newPersonData));
    nameInputField.value = '';
}
