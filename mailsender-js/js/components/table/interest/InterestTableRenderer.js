import InterestTableComponent from './InterestTableComponent';

export default class InterestTableRenderer {
	constructor() {
		this.table = new InterestTableComponent();
	}

	render(data) {
		this.table.render(data);
	}
}
