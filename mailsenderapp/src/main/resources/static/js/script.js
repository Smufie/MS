import { getPersonList } from './allPersonsGetter.js';
import { nameInput } from "./components/nameInputComponent.js"
import { getMenu } from "./getMenuDataHandler.js"


window.addEventListener('load', function () {
    getPersonList();  //imported
    getMenu();
});
const inputContainer = document.getElementById('input');
let nameInputComp = new nameInput();
inputContainer.appendChild(nameInputComp);



