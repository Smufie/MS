document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM zostal wczytany.");
});

var menuButton4 = document.getElementById("menu-clickme");
var mainSection = document.getElementById("main-section");
var classChanged = false;

menuButton4.addEventListener("click", function() {
    if (!classChanged) {
        mainSection.classList.add("red");
        classChanged = !classChanged;
    } else {
        mainSection.classList.remove("red");
        classChanged = !classChanged;
    }

});

var submitNameButton = document.getElementById('submit-button');
submitNameButton.addEventListener("click", function() {
    var nameInput = document.getElementById('name-input');
    var obj = {
        name: nameInput.value
    };

    nameInput.value = '';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8080/person/add');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var informationReturned = document.createElement("P");
            informationReturned.innerHTML = "Person: " + obj.name + " successfully created.";
            document.getElementById("output").appendChild(informationReturned);      
        }
    }
    xhr.send(JSON.stringify(obj));

});
