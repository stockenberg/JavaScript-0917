
var imgContainer = document.getElementById('gallery');
var listItems = imgContainer.children[0].children;

for (var index = 0; index < listItems.length; index++) {
    listItems[index].children[0].onclick = function (event) {

        var srcCopy = event.target.src;

        /** Delete lightbox elements if they are, no duplicates **/
        if (document.getElementsByClassName('lightbox').length > 0) {
            document.getElementsByClassName('lightbox')[0].remove();
        }

        /* Create IMG tag after clickEvent */
        var overlay = document.createElement('div');
        overlay.id = 'overlay';

        var element = document.createElement('img');
        element.src = srcCopy;
        element.classList = 'lightbox';

        overlay.appendChild(element);
        document.body.appendChild(overlay);


        /** Close Lightbox **/
        document.getElementById('overlay').onclick = function (event) {
            console.log('huhu');

            if(event.target.tagName !== "IMG"){
                document.getElementById('overlay').remove();
            }
        };

    };
}



