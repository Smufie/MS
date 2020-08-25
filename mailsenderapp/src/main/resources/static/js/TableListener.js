import { handleEditResponse as handleResponse } from './reponseHandler';
import { establishPersonEditHttpRequest as establishHttpRequest } from './httpRequestEstablisher';
import PersonData from './PersonData';
// eslint-disable-next-line import/no-cycle
import getPersonList from './allPersonsGetter'; //  TODO

export default class TableListener {
    constructor() {
        setNameCellsProperties();
    }
}

function setNameCellsProperties() {
    const personsTable = document.getElementById('person-table');
    for (let i = 1; i < personsTable.rows.length; i += 1) {
        const nameCell = personsTable.rows[i].cells[1];
        nameCell.class = 'name-cell';
        nameCell.contentEditable = 'true';
        addNameCellListener(nameCell);
        nameCell.setAttribute(
            'data-person-id',
            personsTable.rows[i].cells[0].innerHTML
        );
    }
}

function addNameCellListener(nameCell) {
    nameCell.addEventListener('keypress', enterClicked);
}

function enterClicked(event) {
    if (event.key === 'Enter') {
        editPerson(event);
    }
}

function editPerson(event) {
    const newPersonData = new PersonData(
        event.target.textContent,
        event.target.getAttribute('data-person-id')
    );
    const xhr = establishHttpRequest();
    xhr.onreadystatechange = () => {
        handleResponse(xhr, newPersonData);
        getPersonList();
    };
    xhr.send(JSON.stringify(newPersonData));
}
