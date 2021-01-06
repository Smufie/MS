import compiledTemplate from '../../../templates/tableTemplate.hbs';
import InterestMultiselectFactory from './InterestMultiselectFactory';

export default class TableComponent {
	constructor() {
		this.factory = null;
		this.tableSpace = null;
	}

	render(data) {
		this.factory = new InterestMultiselectFactory();
		this.tableSpace = document.getElementById('table-space');
		this.tableSpace.innerHTML = setHTML(data);
		this.injectMultiselects(data);
		return this.tableSpace.innerHTML;
	}

	injectMultiselects(data) {
		const personsTable = document.getElementById('person-table');
		const { length, ...rows } = personsTable.rows;
		for (let i = 1; i < length; i += 1) {
			const nameCellId = rows[i].cells[0].innerHTML;
			this.factory.renderMultiselectTo(`interest-select-${nameCellId}`, data.persons[i - 1]);
		}
	}
}

function setHTML(tableData) {
	return compiledTemplate(tableData);
}
