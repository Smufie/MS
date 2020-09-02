import FetchEstablisher from '../FetchEstablisher';

export default class SubmitButtonListener {
    constructor() {
        this.submitButton = document.getElementById('refresh-button');
    }

    listen(dataObserver) {
        this.submitButton.addEventListener('click', (event) => {
            refresh(dataObserver);
            event.target.blur();
        });
    }
}

function refresh(dataObserver) {
    const fetchEstablisher = new FetchEstablisher();
    fetchEstablisher.fetchPersons(dataObserver);
}
