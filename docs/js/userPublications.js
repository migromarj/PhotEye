"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addPhotosToGalleryAndToContainer(photos, galleryContainer){
    let gallery = galleryRenderer.asCardPublicationGallery2(photos);
    galleryContainer.appendChild(gallery);
}

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function main() {
    
    //Loads the content in userpublications.html  
    
    let galleryContainer = document.querySelector("div.container");

    photosAPI.getByUserId(userId)
             .then(photos => addPhotosToGalleryAndToContainer(photos, galleryContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);