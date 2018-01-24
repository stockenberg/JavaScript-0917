var errors = [];
var data = {};



document.forms[0].onsubmit = function (e){
    e.preventDefault();

    for ( var i = 0; i < e.target.length - 1; i++){
            console.log(e.target[i]);
            switch (e.target[i].name){



                default:
                    if(e.target[i].value === ""){
                        errors.push('Bitte fülle das Feld: ' + e.target[i].name + " korrekt aus");
                    }else{
                        data[e.target[i].name] = e.target[i].value;
                    }
                    break;
            }

    }

    console.log(errors);
    console.log(data);
};