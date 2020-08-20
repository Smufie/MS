import { nameInputTextFieldComponent } from "./nameInputTextFieldComponent.js";
import { nameInputSubmitButtonComponent } from "./nameInputSubmitButtonComponent.js";
import { nameInputLabelComponent } from "./nameInputLabelComponent.js";

export class nameInput {
    constructor() {
        let nameInputComp = document.createElement('div');

        const nameInputLabelComp = new nameInputLabelComponent();
        nameInputComp.appendChild(nameInputLabelComp);

        const textFieldInputComp = new nameInputTextFieldComponent();
        nameInputComp.appendChild(textFieldInputComp);
        
        const submitButtonComp = new nameInputSubmitButtonComponent();
        nameInputComp.appendChild(submitButtonComp);
        
        return nameInputComp;
    }
}