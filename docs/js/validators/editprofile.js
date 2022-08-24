"use strict"

const editProfileValidator= {

    validateProfile : function (formData) {
        let password = formData.get("password");   //FA
        let passwordPrime = formData.get("password2");   //FA

    let errors = [];
    

    if(password !== passwordPrime){
        errors.push("Las contraseñas deben coincidir.")
    }

    return errors;
    }
};

export{editProfileValidator};