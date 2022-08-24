"user strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";

function main() {
    let loginForm = document.getElementById("id-login-form");

    loginForm.onsubmit = handleSubmitLogin;
}

function handleSubmitLogin(event) {

    event.preventDefault(); 

    let form = event.target;
    let formData = new FormData(form);

    sendLogin(formData);
    
}

function sendLogin(formData) {
    authAPI.login(formData)
           .then(loginData =>  loginWithForm(loginData))
           .catch(error => messageRenderer.showErrorMessage(error));
}


function loginWithForm(loginData) {
    
    let sessionToken = loginData.sessionToken;
    let loggedUser=loginData.user;
    sessionManager.login(sessionToken, loggedUser);
    window.location.href="index.html";
}

document.addEventListener("DOMContentLoaded", main);