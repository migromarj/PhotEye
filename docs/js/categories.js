"user strict";
import { socialRenderer } from "./renderers/social.js";
import { galleryRenderer } from "./renderers/gallery.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addCategoriesToContainer(categories, galleryContainer){
    let gallery = galleryRenderer.asCardCategoryGallery(categories);
    galleryContainer.appendChild(gallery);
}

function main() {

    //Loads the content in categories.html

    let galleryContainer = document.querySelector("div.container");

    categoriesAPI.getAllData()
             .then(categories => addCategoriesToContainer(categories, galleryContainer))
             .catch(error => messageRenderer.showErrorMessage(error));


             
    //Hide the option of add categories in categories.html

    hideCategoryOptions();



    //Allows user to search for categories with a search engine    
    
    let categoryForm = document.getElementById("id-search-category");
    categoryForm.onsubmit = handleSearchCategory;




    //Creates category

    let categoryFormAdd = document.getElementById("id-form-add-category");
    categoryFormAdd.onsubmit = handleCategoryPhoto;

    //Loads all categories

    let categoriesContainer = document.getElementById("id-categories");

    categoriesAPI.getAll()
            .then(categories => addCategoriesToPhoto(categories, categoriesContainer))
            .catch(error => messageRenderer.showErrorMessage(error));

}


//Allows you to search for categories with a search engine

function handleSearchCategory(event) {
   
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let categoryName = document.getElementById("id-name-category").value;

    window.location.href="searchcategories.html?NAME="+categoryName;
}

//Hide the option of add categories

function hideCategoryOptions() {
    let headerButtonAddCategory = document.getElementById("id-btn-add-category");

    if (sessionManager.isLogged()) {
        
    } else {
        headerButtonAddCategory.style.display = "none";
    }
}



//Creates category

function handleCategoryPhoto(event) {
   
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    categoriesAPI.create_category(formData)
        .then(data => window.location.href="categories.html")
        .catch(error => messageRenderer.showErrorMessage(error));
}

//Loads all categories 

function addCategoriesToPhoto(categories, categoriesContainer){
    let galleryCategory = socialRenderer.asCategoryGeneral(categories);
    categoriesContainer.appendChild(galleryCategory);
}


document.addEventListener("DOMContentLoaded", main);