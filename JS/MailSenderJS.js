var menuButton4 = document.getElementById("menu-clickme");
var mainSectionElement = document.getElementById("main-section");
var classChanged = false;
var header = document.getElementById("main-header");
var headerBlinked = false;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM zostal wczytany.");
});

menuButton4.addEventListener("click", function() {
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

});