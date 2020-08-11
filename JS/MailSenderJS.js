var menuButton = window.document.getElementById("menu-link-4");
var mainSectionElement = window.document.getElementById("main-section");
var classChanged = false;
var header = window.document.getElementById("main-header");
var headerBlinked = false;
//debugger;
menuButton.onclick = function() {
    if (!classChanged) {
        mainSectionElement.classList.add("red");
        classChanged = !classChanged;
    } else {
        mainSectionElement.classList.remove("red");
        classChanged = !classChanged;
    }

    
    function blink() {
        if(!headerBlinked) {
            headerBlinked = true;
            header.classList.add("blinker");
            setTimeout(blink(), 1000);
        } else {
            headerBlinked = false;
            header.classList.remove("blinker");
            setTimeout(blink(), 1000);
        }
    }
};