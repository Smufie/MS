export class NameInputComponent {
    constructor() {
        let nameInputComp = document.createElement('div');
        nameInputComp.appendChild(this.createNameInputLabel());
        nameInputComp.appendChild(this.createNameInputTextField());
        nameInputComp.appendChild(this.createNameInputSubmitButton());
        const inputContainer = document.getElementById('input');
        inputContainer.appendChild(nameInputComp);
    }

    createNameInputLabel() {
        let nameInputLabel = document.createElement('label');
        nameInputLabel.innerHTML = 'Type your name:';
        return nameInputLabel;
    }

    createNameInputTextField() {
        let textFieldInput = document.createElement('input');
        textFieldInput.type = 'text';
        textFieldInput.id = 'name-input';
        textFieldInput.name = 'first-name';
        textFieldInput.placeholder = 'eg. John';
        return textFieldInput;
    }

    createNameInputSubmitButton(){
        let submitButton = document.createElement('input');
        submitButton.type='submit';
        submitButton.id='submit-button';
        submitButton.value = 'Submit';
        return submitButton;
    }
}