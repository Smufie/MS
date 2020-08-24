import { editPerson } from './editPersonHandler.js';

export class TableListener {
    constructor() {
        this.setNameCellsProperties();
    }

    setNameCellsProperties() {
        let personsTable = document.getElementById('person-table');
        for (let i = 1; i < personsTable.rows.length; i++) {
            let nameCell = personsTable.rows[i].cells[1];
            nameCell.class = "name-cell";
            nameCell.contentEditable = 'true';
            this.addNameCellListener(nameCell);
            nameCell.setAttribute('data-person-id', personsTable.rows[i].cells[0].innerHTML);
        }
    }
    
    addNameCellListener(nameCell) {
        nameCell.addEventListener("keypress", this.enterClicked)
    }
    
    enterClicked(event) {
        if (event.key === 'Enter') {
            editPerson(event);
        }
    }
}