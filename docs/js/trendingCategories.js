"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { trendingsAPI } from "/js/api/trendings.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addTCategoriesToContainer(categories, galleryContainer){
    let gallery = galleryRenderer.asCardTCategoriesGallery(categories);
    galleryContainer.appendChild(gallery);
}

function main() {
    
    //Loads the content in trendscategories.html 
    
    let galleryContainer = document.querySelector("div.container");

    //Uses

    trendingsAPI.getTCategories()
             .then(categories => addTCategoriesToContainer(categories, galleryContainer))
             .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);