"user strict";
import { usersAPI } from "/js/api/users.js";
import { accountRenderer } from "/js/renderers/account.js";
import { socialRenderer } from "./renderers/social.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addAccountToContainer(user, accountContainer) {
    let userAdd = accountRenderer.asAccountCard(user);
    accountContainer.appendChild(userAdd);
}

//Loads the information in account.html

function main() {

    let accountContainer = document.querySelector("div.container");

    let userId = sessionManager.getLoggedId();

    usersAPI.getById(userId)
        .then(user => addAccountToContainer(user[0], accountContainer))
        .catch(error => messageRenderer.showErrorMessage(error));


    //Loads followers in account.html

    let followersContainer = document.getElementById("id-user-followers");

    usersAPI.getFollowers(userId)
             .then(followers => addFollowersToAccount(followers, followersContainer))
             .catch(error => messageRenderer.showErrorMessage(error));


    //Loads follows in account.html

    let followsContainer = document.getElementById("id-user-follows");

    usersAPI.getFollows(userId)
            .then(follows => addFollowsToAccount(follows, followsContainer))
            .catch(error => messageRenderer.showErrorMessage(error));

}

//Loads followers in account.html

function addFollowersToAccount(followers, followersContainer){
    let galleryFollower = socialRenderer.asFollower(followers);
    followersContainer.appendChild(galleryFollower);
}

//Loads follows in account.html

function addFollowsToAccount(follows, followsContainer){
    let galleryFollow = socialRenderer.asFollow(follows);
    followsContainer.appendChild(galleryFollow);
}



document.addEventListener("DOMContentLoaded", main);