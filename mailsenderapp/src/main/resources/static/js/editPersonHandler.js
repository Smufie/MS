import { handleEditResponse as handleResponse } from './reponseHandler.js'
import { establishPersonEditHttpRequest as establishHttpRequest} from './httpRequestEstablisher.js'
import { PersonData } from './PersonData.js'

export function editPerson(event) {
    
    const newPersonData = new PersonData(event.target.textContent, event.target.getAttribute('data-person-id'));
    let xhr = establishHttpRequest();
    xhr.onreadystatechange = function() {
        handleResponse(xhr, newPersonData);
    }
    xhr.send(JSON.stringify(newPersonData));
}
