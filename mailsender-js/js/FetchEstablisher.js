import { handleAddResponse, handleEditResponse, handleDeleteResponse } from './responseHandler';
import ExceptionHandler from './ExceptionHandler';

export default class FetchEstablisher {
    constructor() {
        this.DEFAULT_HEADER = 'application/json;charset=UTF-8';
        this.DEFAULT_ADRESS = 'http://localhost:8080';
    }

    async fetchPersons(observer) {
        await fetch(`${this.DEFAULT_ADRESS}/persons`, {
            method: 'GET',
            headers: {
                'Content-Type': this.DEFAULT_HEADER,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw response;
                } else {
                    return observer.dataArrived(response);
                }
            })
            .catch((error) => {
                ExceptionHandler.fetchError(error);
            });
    }

    async fetchInterests(observer) {
        await fetch(`${this.DEFAULT_ADRESS}/interests`, {
            method: 'GET',
            headers: {
                'Content-Type': this.DEFAULT_HEADER,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw response;
                } else {
                    return observer.dataArrived(response);
                }
            })
            .catch((error) => {
                ExceptionHandler.fetchError(error);
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
                    throw response;
                } else {
                    return handleEditResponse(response);
                }
            })
            .catch((error) => {
                ExceptionHandler.fetchError(error);
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
                    throw response;
                } else {
                    handleAddResponse(response);
                }
            })
            .catch((error) => {
                ExceptionHandler.fetchError(error);
            });
    }

    async fetchDelete(personId) {
        await fetch(`${this.DEFAULT_ADRESS}/person/delete/${personId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': this.DEFAULT_HEADER,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw response;
                } else {
                    handleDeleteResponse(response);
                }
            })
            .catch((error) => {
                ExceptionHandler.fetchError(error);
            });
    }
}
