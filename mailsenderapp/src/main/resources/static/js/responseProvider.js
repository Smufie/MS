export function showEditResponseToUser(newPersonData) {
    let informationReturned = document.createElement("P");
    informationReturned.className = "information-returned";
    informationReturned.innerHTML = "Person with id \"" + newPersonData.id
        + "\" successfully updated with name \"" + newPersonData.name + "\".\n";
    document.getElementById("output").appendChild(informationReturned);
}

export function showAddResponseToUser(newPersonData, responseText) {
    let informationReturned = document.createElement("P");
    informationReturned.className = "information-returned";
    informationReturned.innerHTML = "Person \"" + newPersonData.name + "\" successfully created with id " + responseText + ". \n";
    document.getElementById("output").appendChild(informationReturned);
}
