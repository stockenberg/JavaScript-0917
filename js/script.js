/*
    TODO: JavaScript Navigation-Toggle
    TODO: JavaScript Todo-List
    TODO: JavaScript Image Slider
    TODO: JavaScript Lightbox
    TODO: Tabs with JavaScript
*/


var img = document.getElementsByClassName('openImg');

console.log(img);

for(var index = 0; index < img.length; index++){
    img[index].onclick = function (event) {
        var srcCopy = event.target.src;
        var lightbox = document.getElementsByClassName("lightbox")[0].src = srcCopy;
    };
}



