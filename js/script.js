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


arrUsers = [
    {id: 1, name: 'test'},
    {id: 2, name: 'test2'}
];


/**
 * Events - Der Event Parameter gibt euch Informationen über das Ausgeführte Event aus.
 * Unter anderem steht in dem Parameter die Info darüber, auf welchem Element das Event ausgeführt wurde.
 * @type {NodeList}
 */
var posts = document.getElementsByClassName('posts');

for (var i = 0; i < posts.length; i++) {
    console.log("I ist: " + i);
    posts[i].onmouseover = function (event) {
        console.log(event);
        event.target.style.background = "red";
    }
}

var clickCount = 1;
    document.getElementById('next').onclick = function (e) {
        console.log("button clicked");

        console.log(sliderCount);
        console .log(sliderCount.innerText.split('von'));
        sliderCount.innerHTML = clickCount + " von " + sliderCount.innerText.split('von')[1];
        clickCount++;
    };

var slider = document.getElementById('slider');
var sliderCount;

console.log(slider);
for (var index = 0; index < slider.children.length; index++) {

    if (slider.children[index].tagName === "P") {
        console.log(slider.children[index].innerText);
        sliderCount = slider.children[index];

        sliderCount.innerHTML = "1 von " + (slider.children.length - 3);

    }
}

