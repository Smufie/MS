export function showEditResponseToUser(newPersonData) {
    const informationReturned = document.createElement('P');
    informationReturned.className = 'information-returned';
    informationReturned.innerHTML = `Person with id "${newPersonData.id}" successfully updated with name "${newPersonData.name}".\n`;
    document.getElementById('output').appendChild(informationReturned);
}

export function showAddResponseToUser(newPersonData, responseText) {
    const informationReturned = document.createElement('P');
    informationReturned.className = 'information-returned';
    informationReturned.innerHTML = `Person "${newPersonData.name}" successfully created with id ${responseText}. \n`;
    document.getElementById('output').appendChild(informationReturned);
}
