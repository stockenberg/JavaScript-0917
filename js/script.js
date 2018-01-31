

var buttons = document.getElementsByClassName('btn');

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (event){
        // hide all contents
        document.getElementsByClassName('show')[0].classList.remove('show');

        var clickedButton = event.target;
        // Show clicked content
        var content = clickedButton.parentNode.parentNode.nextElementSibling;
        content.classList.add('show');

    };
}