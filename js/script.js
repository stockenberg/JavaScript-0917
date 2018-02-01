

/*
    Datentypen
    Objekte vs Arrays
    Schleifen
    Funktionen
        + Parameter
        + Geltungsbereiche
    Kontrollstrukturen
        + IF
        + Switch
    DOM
    Browser Object Model
    Traversing / Navigation im Dom
    Die Arbeit mit der Konsole
    Events
    Wichtige Objekte
        + Navigator
        + Window
        + Screen
        + Console
        + History
        + Location
    Try / Catch
 */

var posts = document.getElementsByClassName('posts');

for (var i = 0; i < posts.length; i++){
    posts[i].onmouseover = function (event) {
        console.log(event);
        event.target.style.background = "red";
    }
}
