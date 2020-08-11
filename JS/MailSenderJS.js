var menuButton4 = document.getElementById("menu-link-4");
var mainSectionElement = document.getElementById("main-section");
var classChanged = false;
var header = document.getElementById("main-header");
var headerBlinked = false;
//debugger;
menuButton4.onclick = function() {
    if (!classChanged) {
        mainSectionElement.classList.add("red");
        document.getElementsByClassName("article-in-main-section")[2].innerHTML = "<p>I'm changing!</p>";
        classChanged = !classChanged;
    } else {
        mainSectionElement.classList.remove("red");
        document.getElementsByClassName("article-in-main-section")[2].innerHTML =
        "<p>This is column #3 in main section.</p>";
        classChanged = !classChanged;
    }

};