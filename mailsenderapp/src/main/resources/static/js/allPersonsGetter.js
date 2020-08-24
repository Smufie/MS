import { TableComponent } from './components/TableComponent.js'
import {establishPersonsHttpRequest as establishHttpRequest} from './httpRequestEstablisher.js'

export function getPersonList() {
    let xhr = establishHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let persons = JSON.parse(xhr.responseText);
            new TableComponent(persons);
        }
    }
    xhr.send();
}
