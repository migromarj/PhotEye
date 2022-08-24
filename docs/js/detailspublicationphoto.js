"user strict";

import { photosAPI } from "/js/api/photos.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { socialRenderer } from "./renderers/social.js";
import { categoriesAPI } from "/js/api/categories.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { inappropriateWordsAPI } from "/js/api/inappropriateWords.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let currentPhoto = null;

//Loads information in detailpublicationphoto.html

function main() {

    //Photo title, description, date, visibility and rating

    let photoContainer = document.querySelector("#id-photo-details-publication");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetailsPublication1(photos[0]);
            photoContainer.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));


    //Photo

    let photoContainer2 = document.querySelector("#id-publication");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetailsPublication2(photos[0]);
            photoContainer2.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));


    //URL button

    let photoContainer3 = document.querySelector("#id-url-photo-details-publication");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetailsPublication3(photos[0]);
            photoContainer3.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));




    //Delete publication photo
    
    let btnDelete = document.querySelector("#id-button-delete");
    btnDelete.onclick = handleDelete;









    //Select Picker deletes category

    let categoriesContainer = document.querySelector("#id-delete-select-categories");
   
    categoriesAPI.get_categories_num_by_photoId(photoId)
                .then(num => {

                    let n = num[0].num;
                    
                    if (n > 0) {
                        
                        categoriesAPI.get_categories_by_photoId(photoId)
                                    .then(categories => addCategoriesToPhoto3(categories, categoriesContainer))
                                    .catch(error => error);
                    
                    }else{

                    }

                });  

    //Deletes category
    
    let deleteCategoryForm = document.getElementById("id-form-delete-category");

    deleteCategoryForm.onsubmit = handleSubmitDeleteCategory;





    //Select Picker adds category

    let categoriesContainer2 = document.querySelector("#id-add-select-categories");
    categoriesAPI.getAll()
             .then(categories => addCategoriesToPhoto2(categories, categoriesContainer2))
             .catch(error => messageRenderer.showErrorMessage(error));

    //Adds category

    let addCategoryForm = document.getElementById("id-form-add-category");

    addCategoryForm.onsubmit = handleSubmitCategory;






    //Creates category

    let categoryForm = document.getElementById("id-form-create-category");
    categoryForm.onsubmit = handleCategoryPhoto;




    loadCurrentPhoto();

    //Edits photo

    let editForm = document.getElementById("id-form-edit-photo");
    editForm.onsubmit = handleEditPhoto;

}


//Delete publication photo

function handleDelete(event) {

   
    photosAPI.delete(photoId)
        .then(data => window.location.href = "publications.html")
        .catch(error => messageRenderer.showErrorMessage(error));

}






//Select Picker deletes category

function addCategoriesToPhoto3(categories, categoriesContainer2){
    let galleryCategory = socialRenderer.asCategory3(categories);
    categoriesContainer2.appendChild(galleryCategory);
}

//Select Picker adds category

function addCategoriesToPhoto2(categories, categoriesContainer2){
    let galleryCategory = socialRenderer.asCategory2(categories);
    categoriesContainer2.appendChild(galleryCategory);
}






//Deletes category

function handleSubmitDeleteCategory(event) {

    event.preventDefault(); 

    let form = event.target;
    let formData = new FormData(form);

    let nombre = document.getElementById("id-dlt-category").value;
    
    categoriesAPI.get_categories_by_name(nombre)
                .then(category => {
                    categoriesAPI.delete(photoId, category[0].categoryId)
                                .then(data => window.location.href = window.location)
                                .catch(error => messageRenderer.showErrorMessage(error));
                })
                .catch(error => messageRenderer.showErrorMessage(error));
                
}

//Adds category

function handleSubmitCategory(event) {

    event.preventDefault(); //

    let form = event.target;
    let formData = new FormData(form);

    let nombre = document.getElementById("id-add-category").value;

    formData.append("photoId", photoId);
    
    categoriesAPI.get_categories_by_name(nombre)
                .then(category => {
                    formData.append("categoryId", category[0].categoryId);
                    categoriesAPI.create_photo_category(formData)
                                .then(data => window.location.href = window.location)
                                .catch(error => messageRenderer.showErrorMessage(error));
                })
                .catch(error => messageRenderer.showErrorMessage(error));

}

//Creates category

function handleCategoryPhoto(event) {
   
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    categoriesAPI.create_category(formData)
        .then(data => window.location.href=window.location)
        .catch(error => messageRenderer.showErrorMessage(error));
}






function loadCurrentPhoto() {
    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let descriptionInput = document.getElementById("input-description");
    let visibilityInput = document.getElementById("input-visibility");

    photosAPI.getById(photoId)
        .then(photos => {
            currentPhoto = photos[0];
            urlInput.value = currentPhoto.url;
            titleInput.value = currentPhoto.title;
            descriptionInput.value = currentPhoto.description;
            visibilityInput.value = currentPhoto.visibility;
        })
        .catch(error => messageRenderer.showErrorMessage(error));
}

//Edits photo

function handleEditPhoto(event) {

    //Checks if it contains inappropriate words

    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    inappropriateWordsAPI.get_inappropriateWords()
        .then(words => {

            let errors = [];

            let inappropriateWords = [];
            for (let p of words) {
                inappropriateWords.push(p.word);
            }

            let title = formData.get("title");   //FA
            let description = formData.get("description");  //FA


            let arrT = title.toLowerCase();
            let arrD = description.toLowerCase();

            for (let word of inappropriateWords) {
                if (arrT.includes(word)) {
                    errors.push("El título contiene palabras inapropiadas: " + word);
                    break;
                }
            }

            for (let word of inappropriateWords) {
                if (arrD.includes(word)) {
                    errors.push("La descripción contiene palabras inapropiadas: " + word);
                    break;
                }
            }

            if (errors.length === 0) {
                formData.append("userId", currentPhoto.userId);
                formData.append("date", currentPhoto.date);
                photosAPI.update(photoId, formData)
                    .then(data => window.location.href = window.location)
                    .catch(error => messageRenderer.showErrorMessage(error));
            } else {
                let errorDiv = document.getElementById("errors");
                errorDiv.innerHTML = "";
                for (let error of errors) {
                    messageRenderer.showErrorMessage(error);
                }
            }
        })
        .catch(error => messageRenderer.showErrorMessage(error))

}



document.addEventListener("DOMContentLoaded", main);