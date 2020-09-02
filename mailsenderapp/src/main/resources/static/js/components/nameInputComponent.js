export default class NameInputComponent {
    constructor() {
        this.nameInputComp = document.createElement('div');
        this.nameInputComp.appendChild(createNameInputLabel());
        this.nameInputComp.appendChild(createNameInputTextField());
        this.nameInputComp.appendChild(createNameInputSubmitButton());
    }

    inject() {
        const inputContainer = document.getElementById('input');
        inputContainer.appendChild(this.nameInputComp);
    }
}

function createNameInputLabel() {
    const nameInputLabel = document.createElement('label');
    nameInputLabel.innerHTML = 'Username:';
    return nameInputLabel;
}

function createNameInputTextField() {
    const textFieldInput = document.createElement('input');
    textFieldInput.type = 'text';
    textFieldInput.id = 'name-input';
    textFieldInput.name = 'first-name';
    textFieldInput.placeholder = 'eg. John';
    return textFieldInput;
}

function createNameInputSubmitButton() {
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.id = 'submit-button';
    submitButton.className = 'button';
    submitButton.value = 'Submit';
    return submitButton;
}
