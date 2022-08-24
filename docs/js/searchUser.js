"user strict";
import { profileRenderer } from "./renderers/profile.js";
import { usersAPI } from "/js/api/users.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let userName = urlParams.get("userName");

let userRegister = sessionManager.getLoggedId();

function addDataUserToContainer(user, userContainer){
    let userP = profileRenderer.asUserProfile(user[0], userRegister);
    userContainer.appendChild(userP);
}

function main() {
    
    //Loads the content in searchusers.html
    
    let userContainer = document.querySelector("div.container");

    usersAPI.getByUseName(userName)
             .then(users =>
                usersAPI.getById(users[0].userId)
                        .then(userData => addDataUserToContainer(userData, userContainer))
                        .catch(error => messageRenderer.showErrorMessage(error))
             
             
             )
             .catch(error => messageRenderer.showErrorMessage(error));

    

}

document.addEventListener("DOMContentLoaded", main);