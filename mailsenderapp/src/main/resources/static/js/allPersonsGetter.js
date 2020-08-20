import { refreshTable } from './tableHandler.js'
import {establishPersonsHttpRequest as establishHttpRequest} from './httpRequestEstablisher.js'

export function getPersonList() {
    let xhr = establishHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let persons = JSON.parse(this.responseText);
            refreshTable(persons); //imported
        }
    }
    xhr.send();
}
