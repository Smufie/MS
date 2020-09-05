import compiledTemplate from '../../templates/tableTemplate.hbs';
import PersonData from '../PersonData';

export default class TableComponent {
    constructor(targetID) {
        this.tableSpace = null;
        this.tableBody = null;
        this.targetID = targetID;
    }

    renderTo(tableData) {
        this.tableSpace = document.getElementById(this.targetID);
        this.tableSpace.innerHTML = '';
        const generatedHTML = compiledTemplate(tableData);
        this.tableSpace.innerHTML = generatedHTML;
        listen();
    }
}

function setNameCellProperties(nameCell, nameCellId) {
    const newNameCell = nameCell;
    newNameCell.class = 'name-cell';
    newNameCell.contentEditable = 'true';
    newNameCell.setAttribute('data-person-id', nameCellId);
    return newNameCell;
}

function addNameCellListener(nameCell) {
    nameCell.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const newPersonData = new PersonData(
                event.target.textContent,
                event.target.getAttribute('data-person-id')
            );
            window.fetchObserver.requestArrived('editperson', newPersonData);
            event.target.blur();
        }
    });
}

function listen() {
    const personsTable = document.getElementById('person-table');
    const { length, ...rows } = personsTable.rows;
    for (let i = 1; i < length; i += 1) {
        const nameCellId = rows[i].cells[0].innerHTML;
        let nameCell = rows[i].cells[1];
        nameCell = setNameCellProperties(nameCell, nameCellId);
        addNameCellListener(nameCell);
    }
}
