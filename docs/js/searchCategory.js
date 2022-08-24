"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let categoryName = urlParams.get("NAME");

function addCategoriesToContainer(categories, galleryContainer){
    let gallery = galleryRenderer.asCardCategoryGallery2(categories);
    galleryContainer.appendChild(gallery);
}



function main() {
    
    //Loads the content in searchcategories.html    
    
    let galleryContainer = document.querySelector("div.container");


    categoriesAPI.get_all_data_categories_by_name(categoryName)
             .then(categories => addCategoriesToContainer(categories, galleryContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);