#MailSender
Java and JS code for MailSender.

TODO and DONE List:

codecademy, css dinner
JS site life cycle DONE 11.08 (4)
Biblioteka JQuery TODO 12.08
DOM Tree DONE 11.08 (3)
Hello Roman, blog/yt; nafrontendzie.pl; yt googlechrome
XML HTTP request DONE 11.08 (7)
JQuery metody ajax TODO 12.08
JS polifils, transpilation. DONE 11.08 (8)
GitHub DONE 11.08 (1)
Trello/Slack DONE 11.08 (2)
XAMPP DONE 11.08 (6) (TODO: wiem do czego służy, narazie jeszcze nie pobieram)
HTTP requesty, status codes DONE 11.08 (5)
Pytania:

Różnice między DOM Eventami a EventListnerami. (używać "menuButton4.addEventListener("click"...", czy "menuButton4.onclick = function()...") https://www.w3schools.com/js/js_htmldom_eventlistener.asp -> szczególnie removeListener (dynamiczne dodawanie elementow DOM i wycieki pamieci), event Bubbling i Event Capturing
Czy da się zobaczyć drzewo DOM pod F12 w przeglądarce? (Chodzi o graficzną reprezentacje drzewa, np. graf) http://www.jsonml.org/ cos takiego ?
Jeżeli kod "document.body" odwołuje się do znacznika body, to sam "document" odwołuje się do znacznika html? - mozna tak myslec, ale to troche wiecej - https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument Jeśli tak/nie, to do czy "window" odwołuje się do jakiegokolwiek znacznika.
Jak przełożyć słowo node na polski i do czego może się ono odwoływać?
Tekst w p/h jest ich jedynym childem? - a co ze span, i, u, a ? :D
Do jakiej klasy w Javie HTMLCollection jest najbardziej podobna? (podejrzewam że do żadnej albo do wszystkich, w3schools używa stwierdzenia "array-like list", które tak naprawdę nic nie mówi) - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection - tablica obiektow
DOMContentLoaded, potrzebuje dłuższego wytłumaczenia. (co zwraca document.readyState, gdy DOMCL się odpala) - https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event ten event leci, jesli przegladarka "przeprocesowala" kod strony, ale nie czeka na zewnetrzne zasoby np zdjecia
Czy cykl życia strony mam rozumieć jako kilka kluczowych eventów które triggerują się zawsze niezależnie od strony? - dokladnie tak - https://javascript.info/onload-ondomcontentloaded
Jak działa .preventDefault()? - kazda przegladarka domysle w jakis sposob moze obslugiwac jakies zachowania - ta metoda mowi, ze tego nie chcemy, bo sami "wiemy" lepiej co chcemy zrobic - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
Czy ktokolwiek używa "use strict"? - skoro jest to tak :-) wprowadza to troche ograniczen i pilnuje, ale pozniej przerobimy inne narzedzia, ktore beda tego pilnowaly - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
11. Czy bubbling i capturing "wywołuję się" dosłownie za każdym razem gdy zostanie przechwycony jakiś event (https://javascript.info/bubbling-and-capturing)? Czy da się odwrócić kolejność tych procesów?