import('./test.js');

var menuButton4 = document.getElementById("menu-clickme");
var mainSection = document.getElementById("main-section");
var submitNameButton = document.getElementById('submit-button');




submitNameButton.addEventListener("click", function() {
    var nameInput = document.getElementById('name-input');
    var newPersonData = {
        name: nameInput.value
    };
    nameInput.value = '';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8080/person/add');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var informationReturned = document.createElement("P");
            informationReturned.className = "information-returned";
            informationReturned.innerHTML = "Person \"" + newPersonData.name + "\" successfully created with id " + this.responseText + ".";
            document.getElementById("output").appendChild(informationReturned);
            getPersonList();      
        }
    }
    xhr.send(JSON.stringify(newPersonData));
});

function getPersonList() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:8080/persons');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var persons = JSON.parse(this.responseText);
            attachPersonsToTable(persons);
        }
    }
    xhr.send();
}

var nameCells;

function attachPersonsToTable(persons) {
    var personsTable = document.getElementById('person-table');
    clearTable(personsTable);
    for (var i = 0; i < persons.length; i++) {
        var newRow = personsTable.insertRow(i + 1);
        var newIdCell = newRow.insertCell(0);
        var newNameCell = newRow.insertCell(1);
        newNameCell.className = "name-cell";
        newNameCell.contentEditable = 'true';
        newNameCell.addEventListener("keypress", function(event) {
            if (event.key === 'Enter') {
                updatePerson(event);
            }
        });
        newNameCell.setAttribute("person-id", persons[i].id);
        newIdCell.innerHTML = persons[i].id;
        newNameCell.innerHTML = persons[i].name;
    }
}

function updatePerson(event) {
    debugger;
    var newPersonData = {
        name: event.target.textContent,
        id: event.target.getAttribute('person-id')
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8080/person/edit');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var informationReturned = document.createElement("P");
            informationReturned.className = "information-returned";
            informationReturned.innerHTML = "Person with id \"" + newPersonData.id 
                + "\" successfully updated with name \"" + newPersonData.name + "\".";
            document.getElementById("output").appendChild(informationReturned); 
            getPersonList();      
        }
    }
    xhr.send(JSON.stringify(newPersonData));
}

function clearTable(personsArray) {
    while (personsArray.rows.length > 1) {
        personsArray.deleteRow(1);
    }
}

window.addEventListener('load', getPersonList);