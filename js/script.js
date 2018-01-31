var Accordeon = function () {

    this.collapse = function (elem) {
        var elem = elem;
        var textElem = elem.parentNode.parentNode.nextSibling.nextSibling;

        var elements = document.getElementsByClassName('show');
        elements[0].classList.remove('show');

        textElem.classList.add('show');

        console.log(
            textElem
        )

    }

};

var acc = new Accordeon();
