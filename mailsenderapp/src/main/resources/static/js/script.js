import { NameInputComponent } from "./components/NameInputComponent.js"
import { MenuComponent } from "./components/MenuComponent.js"
import { MainSectionContainer } from './components/MainSectionContainer.js';
import { getPersonList } from './allPersonsGetter.js';
import { SubmitButtonListener } from "./SubmitButtonListener.js";


window.addEventListener('DOMContentLoaded', function () {
    setupView();
});

window.addEventListener('load', function () {
    setupListeners();
});

function setupView() {
    new MenuComponent();
    new MainSectionContainer();
    new NameInputComponent();
    getPersonList();
}

function setupListeners() {
    new SubmitButtonListener();
}