import { getPersonList } from './allPersonsGetter.js'
import { showAddResponseToUser } from './responseProvider.js'
import { showEditResponseToUser } from './responseProvider.js'

export function handleAddResponse(xhr, newPersonData) {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        showAddResponseToUser(newPersonData, xhr.responseText);
        getPersonList();
    }
}

export function handleEditResponse(xhr, newPersonData) {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        showEditResponseToUser(newPersonData);
        getPersonList();
    }
}