import PersonData from '../../PersonData';

// TODO Cell/Row class

export default class TableListener {
    listen() {
        const personsTable = document.getElementById('person-table');
        const { length, ...rows } = personsTable.rows;
        this.establishTableProperties(length, rows);
    }

    establishTableProperties(length, rows) {
        for (let i = 1; i < length; i += 1) {
            const nameCellId = rows[i].cells[0].innerHTML;
            for (let y = 1; y < rows[i].cells.length; y += 1) {
                const types = ['name', 'mail', 'interests'];
                let nameCell = rows[i].cells[y];
                nameCell = this.setCellProperties(nameCell, nameCellId, types[y - 1]);
                addCellListener(nameCell, nameCellId);
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    setCellProperties(nameCell, nameCellId, type) {
        const newNameCell = nameCell;
        newNameCell.contentEditable = 'true';
        newNameCell.setAttribute('data-person-id', nameCellId);
        newNameCell.id = `${type}-${nameCellId}`;
        return newNameCell;
    }
}

function addCellListener(nameCell, nameCellId) {
    nameCell.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const newPersonData = readNewPersonDataFromTable(nameCellId);
            window.fetchObserver.requestArrived('editperson', newPersonData);
            event.target.blur();
        }
    });
}

function readNewPersonDataFromTable(nameCellId) {
    const nameCellValue = document.getElementById(`name-${nameCellId}`).innerHTML;
    const mailCellValue = document.getElementById(`mail-${nameCellId}`).innerHTML;
    const interestsCellValue = document.getElementById(`interests-${nameCellId}`).innerHTML;
    const interestsArray = Array.from(interestsCellValue.split(','));
    return new PersonData(nameCellValue, mailCellValue, interestsArray, nameCellId);
}