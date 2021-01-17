import PersonTableComponent from './PersonTableComponent';
import PersonTableListener from './PersonTableListener';

export default class PersonTableRenderer {
	constructor() {
		this.table = new PersonTableComponent();
		this.listener = new PersonTableListener();
	}

	render(data) {
		this.table.render(data);
		this.listener.listen();
	}
}
