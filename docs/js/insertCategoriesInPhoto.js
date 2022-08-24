"user strict";
import { socialRenderer } from "./renderers/social.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {

    //Loads categories of a photo
    
    let categoriesContainer = document.getElementById("id-photo-categories");

    categoriesAPI.get_categories_num_by_photoId(photoId)
                .then(num => {

                    let n = num[0].num;
                    
                    if (n > 0) {
                        
                        categoriesAPI.get_categories_by_photoId(photoId)
                                    .then(categories => addCategoriesToPhoto(categories, categoriesContainer))
                                    .catch(error => error);
                    
                    }else{

                    }

                });    

}

//Loads categories of a photo

function addCategoriesToPhoto(categories, categoriesContainer){
        
        let galleryCategory = socialRenderer.asCategory(categories);
        categoriesContainer.appendChild(galleryCategory);
}


document.addEventListener("DOMContentLoaded", main);