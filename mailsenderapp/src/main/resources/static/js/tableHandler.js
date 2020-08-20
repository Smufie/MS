import { editPerson } from './editPersonHandler.js';

export function refreshTable(persons) {
    const personsTable = document.getElementById('person-table');
    clearTable(personsTable);
    for (let i = 0; i < persons.length; i++) {
        let newRow = personsTable.insertRow(i + 1);
        let newIdCell = newRow.insertCell(0);
        let newNameCell = newRow.insertCell(1);
        setNameCellProperties(newNameCell, persons, i);
        newIdCell.innerHTML = persons[i].id;
        newNameCell.innerHTML = persons[i].name;
    }
}

function setNameCellProperties(newNameCell, persons, i) {
    newNameCell.className = "name-cell";
    newNameCell.contentEditable = 'true';
    addNameCellListener(newNameCell);
    newNameCell.setAttribute("data-person-id", persons[i].id);
}

function addNameCellListener(newNameCell) {
    newNameCell.addEventListener("keypress", enterListener)
}

function clearTable(personsArray) {
    while (personsArray.rows.length > 1) {
        personsArray.rows[1].cells[1].removeEventListener("keypress", enterListener);
        personsArray.deleteRow(1);
    }
}

var enterListener  = function enterClicked(event) {
    if (event.key === 'Enter') {
        editPerson(event);  //imported
    }
}