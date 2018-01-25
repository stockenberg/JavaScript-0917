



document.forms[0].onsubmit = function (e){
    e.preventDefault();
    var errors = [];
    var data = {};
    /* complicated validation logik */
    for ( var i = 0; i < e.target.length - 1; i++){
            console.log(e.target[i]);
            switch (e.target[i].name){

                case 'email':
                    if(e.target[i].value === ""){
                        errors.push('Bitte fülle das Feld: ' + e.target[i].name + " korrekt aus");
                    }else{
                        if(!e.target[i].value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                            errors.push('Dies ist keine gültige E-Mail Adresse');
                        }else{
                            data[e.target[i].name] = e.target[i].value;
                        }
                    }
                    break;

                default:
                    if(e.target[i].value === ""){
                        errors.push('Bitte fülle das Feld: ' + e.target[i].name + " korrekt aus");
                    }else{
                        data[e.target[i].name] = e.target[i].value;
                    }
                    break;
            }

    }

    /* if errors occured - exit*/
    if(errors.length > 0){
        printErrors(errors);
        return false;
    }

    /* submit data */
    console.log(errors);
    console.log(data);
};

function printErrors (errors) {

    /* TODO: remove element has to be completed */

    if(errors === 'undefined'){
        return false;
    }

    for(var i = 0; i < errors.length; i++){
        var error = document.createElement('p');
        error.innerHTML = errors[i];
        error.classList = 'error';
        document.body.appendChild(error);
    }
}