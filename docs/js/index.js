"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addPhotosToGalleryAndToContainer(photos, galleryContainer){
    let gallery = galleryRenderer.asCardGallery(photos);
    galleryContainer.appendChild(gallery);
}

function main() {

    //Loads the content in index.html    
    
    let galleryContainer = document.querySelector("div.container");

    photosAPI.get_photos_index()
             .then(photos => addPhotosToGalleryAndToContainer(photos, galleryContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);