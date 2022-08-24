"use strict"

const userValidator= {

    validateRegister : function (formData) {
        let firstName = formData.get("name");   //FA
        let lastName = formData.get("surnames");   //FA
        let password = formData.get("password");   //FA
        let passwordPrime = formData.get("password2");   //FA
    let errors = [];

    if(firstName.length < 3){
        errors.push("El nombre debe tener al menos 3 caracteres.")
    }
    if(lastName.length < 3){
        errors.push("El apellido debe tener al menos 3 caracteres.")
    }
    if(password !== passwordPrime){
        errors.push("Las contraseñas deben coincidir.")
    }

    return errors;
    }
};

export{userValidator};