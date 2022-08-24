"use strict";
import { photosAPI } from "/js/api/photos.js";
import { ratingsAPI } from "/js/api/ratings.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";


let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");


//Loads information in detailsphoto.html

function main() {

    //Photo title, description, user, date and rating

    let photoContainer = document.querySelector("#id-details-index-p");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails1(photos[0]);
            photoContainer.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    //Photo

    let photoContainer2 = document.querySelector("#id-img-details");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails2(photos[0]);
            photoContainer2.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));

    //URL button

    let photoContainer3 = document.querySelector("#id-img-url");
    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails3(photos[0]);
            photoContainer3.appendChild(photoDetails);
        })
        .catch(error => messageRenderer.showErrorMessage(error));


    //Hide the option of rating a photo and doing a comment in detailsphoto.html

    hidePhotoOptions();



    //Ratings a photo

     let ratingForm = document.getElementById("id-rating-form");
     ratingForm.onsubmit = handleRatingPhoto;

}


//Hide the option of rating a photo and doing a comment in detailsphoto.html

function hidePhotoOptions() {

    let detailsComment = document.getElementById("id-cont-comment");
    let detailsRating = document.getElementById("id-rating-form");

    if (sessionManager.isLogged()) {

    } else {

        detailsComment.style.display = "none";
        detailsRating.style.display = "none";
    }
}


//Ratings a photo

function handleRatingPhoto(event) {

    

    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    // Add the current user ID

    formData.append("photoId", photoId);
    formData.append("userId", sessionManager.getLoggedId());  
    ratingsAPI.create(formData)
        .then(data => window.location.href=window.location)
        .catch(error => messageRenderer.showErrorMessage(error));
}


document.addEventListener("DOMContentLoaded", main);