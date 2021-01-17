import PersonDTO from '../../../PersonDTO';

export default class PersonTableListener {
	// eslint-disable-next-line class-methods-use-this
	listen() {
		const personsTable = document.getElementById('person-table');
		const { length, ...rows } = personsTable.rows;
		establishTableProperties(length, rows);
	}
}

function establishTableProperties(length, rows) {
	for (let i = 1; i < length; i += 1) {
		const nameCellId = rows[i].cells[0].innerHTML;
		for (let y = 1; y < rows[i].cells.length; y += 1) {
			const types = ['name', 'mail', 'interests'];
			let nameCell = rows[i].cells[y];
			nameCell = setCellProperties(nameCell, nameCellId, types[y - 1]);
			addCellListener(nameCell, nameCellId);
		}
	}
}

function setCellProperties(nameCell, nameCellId, type) {
	const newNameCell = nameCell;
	newNameCell.contentEditable = 'true';
	newNameCell.setAttribute('data-person-id', nameCellId);
	newNameCell.id = `${type}-${nameCellId}`;
	return newNameCell;
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
	const interestsIdsArray = getSelectValues(nameCellId);
	return new PersonDTO(nameCellValue, mailCellValue, interestsIdsArray, nameCellId);
}

function getSelectValues(nameCellId) {
	const selected = document.querySelectorAll(`#interest-select-${nameCellId} option:checked`);
	const values = Array.from(selected).map((el) => {
		const interest = { interestId: el.value };
		return interest;
	});
	return values;
}
