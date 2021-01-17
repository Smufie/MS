export default class PersonTableButtonListener {
	constructor() {
		this.refreshButton = document.getElementById('persons-button');
	}

	listen(dataObserver) {
		this.refreshButton.addEventListener('click', (event) => {
			window.fetchObserver.requestArrived('getpersons', dataObserver);
			event.target.blur();
		});
	}
}
