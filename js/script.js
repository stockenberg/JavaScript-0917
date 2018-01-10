var firstname = "Marten",
    gender = "female",
    lastname = "Stockenberg",
    salutation;


function nameWithSalutation(firstname, gender, lastname) {
    if (gender == "male") {
        return "Sehr geehrter Herr " + firstname;
    } else if (gender == "female"){
        return "Sehr geehrte Frau " + firstname;
    }
}

salutation = nameWithSalutation(firstname, gender, lastname);

console.log(salutation);