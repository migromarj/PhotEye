"user strict";

import { usersAPI} from "/js/api/users.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { editProfileValidator } from "/js/validators/editprofile.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");
let currentUser = null;

function main() {

    loadCurrentUser();
    
    //Edits profile

    let editForm = document.getElementById("id-edit-profile-form");
    editForm.onsubmit = handleEditProfile;

}

//Checks if the form contains erros  

function handleSubmitRegister(event) {

    let form = event.target;
    let formData = new FormData(form);

    let errors = editProfileValidator.validateProfile(formData);

    if (errors.length > 0) {
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "";
        for (let error of errors){
            messageRenderer.showErrorMessage(error);
            event.preventDefault();
        }
    }
}

//Edits profile

function handleEditProfile(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let errors = editProfileValidator.validateProfile(formData);

    if (errors.length > 0) {
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "";
        for (let error of errors){
            messageRenderer.showErrorMessage(error);
        }
    }else{

        formData.append("userId", currentUser.userId);
        usersAPI.update(userId, formData)
            .then(data => window.location.href = "profile.html")
            .catch(error => messageRenderer.showErrorMessage(error));
    }
}

//Current user

function loadCurrentUser() {
    let nameInput = document.getElementById("id-nombreep");
    let surnamesInput = document.getElementById("id-apellidosep");
    let emailInput = document.getElementById("id-emailep");
    let telephoneInput = document.getElementById("id-telep");
    let userInput = document.getElementById("id-usuarioep");
    let photoURLInput = document.getElementById("id-urlperfilep");


    usersAPI.getById(userId)
        .then(users => {
            currentUser = users[0];
            nameInput.value = currentUser.name;
            surnamesInput.value = currentUser.surnames;
            emailInput.value = currentUser.email;
            telephoneInput.value = currentUser.phoneNumber;
            userInput.value = currentUser.userName;
            photoURLInput.value = currentUser.profilePictureURL;
        })
        .catch(error => messageRenderer.showErrorMessage(error));
}


document.addEventListener("DOMContentLoaded", main);