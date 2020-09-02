import compiledTemplate from '../../templates/tableTemplate.hbs';
import FetchEstablisher from '../FetchEstablisher';
import PersonData from '../PersonData';

export default class TableComponent {
    constructor() {
        this.tableSpace = null;
        this.tableBody = null;
    }

    //  TODO 2 tabele
    update(tableData) {
        this.tableSpace = document.getElementById('table-space');
        this.tableSpace.innerHTML = '';
        const generatedHTML = compiledTemplate(tableData);
        this.tableSpace.innerHTML = generatedHTML;
        listen();
    }
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

function setNameCellProperties(nameCell, nameCellId) {
    const newNameCell = nameCell;
    newNameCell.class = 'name-cell';
    newNameCell.contentEditable = 'true';
    newNameCell.setAttribute('data-person-id', nameCellId);
    return newNameCell;
}

function addNameCellListener(nameCell) {
    nameCell.addEventListener('keypress', enterClicked);
}

function enterClicked(event) {
    if (event.key === 'Enter') {
        editPerson(event);
        event.target.blur();
    }
}

function editPerson(event) {
    const newPersonData = new PersonData(
        event.target.textContent,
        event.target.getAttribute('data-person-id')
    );
    const fetchEstablisher = new FetchEstablisher();
    fetchEstablisher.fetchEdit(newPersonData);
}
