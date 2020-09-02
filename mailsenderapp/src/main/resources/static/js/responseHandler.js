export function handleEditResponse(fetchResponse) {
    const informationReturned = document.createElement('P');
    fetchResponse.then((data) => {
        informationReturned.className = 'information-returned';
        const { name = '', id = null } = data;
        informationReturned.innerHTML = `Person with id "${id}" successfully updated with name "${name}".\n`;
    });
    document.getElementById('output').appendChild(informationReturned);
}

export function handleAddResponse(fetchResponse) {
    const informationReturned = document.createElement('P');
    fetchResponse.then((data) => {
        informationReturned.className = 'information-returned';
        const { name = '', id = null } = data;
        informationReturned.innerHTML = `Person "${name}" successfully created with id ${id}. \n`;
    });
    document.getElementById('output').appendChild(informationReturned);
}
