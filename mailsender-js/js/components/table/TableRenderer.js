import TableComponent from './TableComponent';
import TableListener from './TableListener';

export default class TableRenderer {
	constructor() {
		this.table = new TableComponent();
		this.listener = new TableListener();
	}

	render(data) {
		this.table.render(data);
		this.listener.listen();
	}
}
