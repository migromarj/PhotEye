"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { trendingsAPI } from "/js/api/trendings.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addTPhotos1ToContainer(photos, galleryContainer){
    let gallery = galleryRenderer.asCardTUsers1Gallery(photos);
    galleryContainer.appendChild(gallery);
}

function addTPhotos2ToContainer(photos, galleryContainer){
    let gallery = galleryRenderer.asCardTUsers2Gallery(photos);
    galleryContainer.appendChild(gallery);
}

//Loads the content in trendsusers.html 

function main() {
    
    //Rating
    
    let galleryContainer1 = document.querySelector("div.container1");

    trendingsAPI.getTUsers1()
             .then(users => addTPhotos1ToContainer(users, galleryContainer1))
             .catch(error => messageRenderer.showErrorMessage(error));


    //Comments

    let galleryContainer2 = document.querySelector("div.container2");

    trendingsAPI.getTUsers2()
            .then(users => addTPhotos2ToContainer(users, galleryContainer2))
            .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);