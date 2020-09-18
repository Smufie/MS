import PersonData from '../../PersonData';

/* eslint-disable class-methods-use-this */
export default class TableListener {
    constructor() {
        this.listen();
    }

    listen() {
        const personsTable = document.getElementById('person-table');
        const { length, ...rows } = personsTable.rows;
        for (let i = 1; i < length; i += 1) {
            const nameCellId = rows[i].cells[0].innerHTML;
            let nameCell = rows[i].cells[1];
            nameCell = this.setNameCellProperties(nameCell, nameCellId);
            this.addNameCellListener(nameCell);
        }
    }

    setNameCellProperties(nameCell, nameCellId) {
        const newNameCell = nameCell;
        newNameCell.class = 'name-cell';
        newNameCell.contentEditable = 'true';
        newNameCell.setAttribute('data-person-id', nameCellId);
        return newNameCell;
    }

    addNameCellListener(nameCell) {
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
}
