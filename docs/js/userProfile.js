"user strict";
import { usersAPI } from "./api/users.js";
import { profileRenderer } from "./renderers/profile.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

let userRegister = sessionManager.getLoggedId();

function addDataUserToContainer(user, userContainer){

    if(sessionManager.isLogged()){
        let userP = profileRenderer.asUserProfile(user[0], userRegister);
        userContainer.appendChild(userP);
    }else{
        let userP = profileRenderer.asUserProfile(user[0], userRegister);  
        userContainer.appendChild(userP);
    }
    
}

function main() {
    
    //Loads the content in userprofile.html   
    
    let userContainer = document.querySelector("div.cont");

    usersAPI.getById(userId)
             .then(userData => addDataUserToContainer(userData, userContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);