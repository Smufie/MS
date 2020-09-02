import { handleAddResponse, handleEditResponse } from './responseHandler';
import ExceptionHandler from './ExceptionHandler';

export default class FetchEstablisher {
    constructor() {
        this.DEFAULT_HEADER = 'application/json;charset=UTF-8';
        this.DEFAULT_ADRESS = 'http://localhost:8080';
    }

    async fetchPersons(repository) {
        await fetch(`${this.DEFAULT_ADRESS}/persons`, {
            method: 'GET',
            headers: {
                'Content-Type': this.DEFAULT_HEADER,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Negative response from server. ("GET", ${response.status})`
                    );
                } else {
                    return repository.dataArrived(response.json());
                }
            })
            .catch((error) => {
                ExceptionHandler.error(error);
            });
    }

    async fetchEdit(editedPerson) {
        await fetch(`${this.DEFAULT_ADRESS}/person/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': this.DEFAULT_HEADER,
            },
            body: JSON.stringify(editedPerson),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Negative response from server. ("POST", ${response.status})`
                    );
                } else {
                    return handleEditResponse(response.json()); // TODO
                }
            })
            .catch((error) => {
                ExceptionHandler.error(error);
            });
    }

    async fetchAdd(newPerson) {
        await fetch(`${this.DEFAULT_ADRESS}/person/add`, {
            method: 'POST',
            headers: {
                'Content-Type': this.DEFAULT_HEADER,
            },
            body: JSON.stringify(newPerson),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Negative response from server. ("POST", ${response.status})`
                    );
                } else {
                    handleAddResponse(response.json());
                }
            })
            .catch((error) => {
                ExceptionHandler.error(error);
            });
    }
}
