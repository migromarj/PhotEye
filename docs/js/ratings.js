"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { ratingsAPI } from "/js/api/ratings.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addRatingsToContainer(ratings, ratingContainer){
    let ratingP = galleryRenderer.asCardRatingsGallery(ratings);
    ratingContainer.appendChild(ratingP);
}

function main() {
    
    //Loads the content in ratings.html    
    
    let ratingContainer = document.querySelector("div.container");

    let userId= sessionManager.getLoggedId();     

    ratingsAPI.getRatingPhotosByUser(userId)
             .then(ratings => addRatingsToContainer(ratings, ratingContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);