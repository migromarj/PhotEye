"user strict";
import { sessionManager } from "/js/utils/session.js";

function main() {

    //Show te user profile picture and username

    showUser();

    //The button "Cerrar sesión" allows user to log out

    addLogoutHandler();

    //Hides some buttons depending on whether the user is authenticated or not

    hideHeaderOptions();

    //Allows user to search for users with a search engine    

    let searchForm = document.getElementById("id-search-user2");
    searchForm.onsubmit = handleSearchUser;

}




//Show te user profile picture and username

function showUser() {

    let title = document.getElementById("id-navbar-user");
    let text;

    let image = document.getElementById("id-img-user-pfl");

    if (sessionManager.isLogged()) {
        let username = sessionManager.getLoggedUser().userName;

        let imgURL =sessionManager.getLoggedUser().profilePictureURL;

        image.src=imgURL;
        text = username;
    } else {
        text = "Anonymous";
    }
    title.textContent = text;
}

//The button "Cerrar sesión" allows user to log out

function addLogoutHandler() {
    let logoutButton = document.getElementById("id-navbar-logout");
    logoutButton.addEventListener("click", function () {
        sessionManager.logout();
        window.location.href = "index.html";
    });
}

//Hides some buttons depending on whether the user is authenticated or not

function hideHeaderOptions() {
    let headerRegister = document.getElementById("id-navbar-register");
    let headerLogin = document.getElementById("id-navbar-login");
    let headerUploadP = document.getElementById("id-navbar-uploadP");
    let headerDropdown = document.getElementById("id-navbar-dropdown");
    let headerButtonsL = document.getElementById("id-navbar-buttons-L");
    let headerButtonsG = document.getElementById("id-navbar-buttons-G");

    if (sessionManager.isLogged()) {
        headerRegister.style.display = "none";
        headerLogin.style.display = "none";
        headerButtonsG.style.display = "none";
    } else {
        headerUploadP.style.display = "none";
        headerDropdown.style.display = "none";
        headerButtonsL.style.display = "none";
    }
}

//Allows user to search for users with a search engine  

function handleSearchUser(event) {
   
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let userName = document.getElementById("id-name-user2").value;

    window.location.href="searchprimary.html?userName="+userName;
}

document.addEventListener("DOMContentLoaded", main);