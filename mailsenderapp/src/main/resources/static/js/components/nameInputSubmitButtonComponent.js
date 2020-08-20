import { addPerson } from '../addPersonHandler.js';

export class nameInputSubmitButtonComponent {
    constructor() {
        let submitButton = document.createElement('input');
        submitButton.type='submit';
        submitButton.id='submit-button';
        submitButton.value = 'Submit';
        submitButton.addEventListener('click', addPerson)
        return submitButton;
    }
}