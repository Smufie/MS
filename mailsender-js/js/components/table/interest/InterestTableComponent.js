import compiledTemplate from '../../../../templates/interestTableTemplate.hbs';

export default class InterestTableComponent {
	constructor() {
		this.tableSpace = null;
	}

	render(data) {
		this.tableSpace = document.getElementById('table-space');
		this.tableSpace.innerHTML = setHTML(data);
		return this.tableSpace.innerHTML;
	}
}
function setHTML(tableData) {
	return compiledTemplate(tableData);
}
