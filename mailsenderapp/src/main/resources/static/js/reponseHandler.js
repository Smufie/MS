import {
    showAddResponseToUser,
    showEditResponseToUser,
} from './responseProvider';

export function handleAddResponse(xhr, newPersonData) {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        showAddResponseToUser(newPersonData, xhr.responseText);
    }
}

export function handleEditResponse(xhr, newPersonData) {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        showEditResponseToUser(newPersonData);
    }
}
