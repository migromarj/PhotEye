"user strict";

import { galleryRenderer } from "./renderers/gallery.js";
import { usersAPI } from "/js/api/users.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addUsersToContainer(users, usersContainer){
    let gallery = galleryRenderer.asCardUsersGallery(users);
    usersContainer.appendChild(gallery);
}

function main() {

    //Loads the content in users.html 

    let userId = sessionManager.getLoggedId();

    let usersContainer = document.querySelector("div.container");

    usersAPI.getAllExcept1(userId)
             .then(users => addUsersToContainer(users, usersContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

    //Allows user to search for categories with a search engine

    let userForm = document.getElementById("id-search-user");
    userForm.onsubmit = handleSearchUser;

}

//Allows user to search for categories with a search engine

function handleSearchUser(event) {
   
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let userName = document.getElementById("id-name-user").value;

    window.location.href="searchusers.html?userName="+userName;
}

document.addEventListener("DOMContentLoaded", main);