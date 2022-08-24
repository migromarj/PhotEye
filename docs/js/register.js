"user strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";

import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";

function main() {
    let registerForm = document.getElementById("id-register-form");

    registerForm.onsubmit = handleSubmitRegister;
}

function handleSubmitRegister(event) {

    event.preventDefault(); 

    let form = event.target;
    let formData = new FormData(form);

    let errors = userValidator.validateRegister(formData);

    if ( errors.length === 0) {
        sendRegister(formData);
    }else{
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "";
        for (let error of errors){
            messageRenderer.showErrorMessage(error);
        }
    }
}

function sendRegister(formData) {

    authAPI.register(formData)
           .then(loginData => loginWithTokenAndUser(loginData))
           .catch(error => messageRenderer.showErrorMessage(error));
}

function loginWithTokenAndUser(loginData) {
    console.log(loginData);
    let sessionToken = loginData.sessionToken;
    let loggedUser=loginData.user;
    sessionManager.login(sessionToken, loggedUser);
    window.location.href="index.html";
}

document.addEventListener("DOMContentLoaded", main);