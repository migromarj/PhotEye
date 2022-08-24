"user strict";
import { usersAPI } from "./api/users.js";
import { profileRenderer } from "./renderers/profile.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addDataUserToContainer(user, userContainer){
    let userP = profileRenderer.asProfile(user[0]);
    userContainer.appendChild(userP);
}

function main() {
    
    //Loads the information in profile.html
    
    let userContainer = document.querySelector("div.container");

    let userId=sessionManager.getLoggedId();

    usersAPI.getById(userId)
             .then(userData => addDataUserToContainer(userData, userContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);