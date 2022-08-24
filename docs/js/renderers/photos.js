"use strict";
import { photosAPI } from "../api/photos.js";
import { ratingsAPI } from "../api/ratings.js";
import { parseHTML } from "../utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";

const photoRenderer = {

    //Loads photo, photo title and username

    asCard: function (photo) {

        let html = `<div class= "col-md-4 mx-auto">
                        <div class= "card class-photo-i">
                            <a href= "detailsphoto.html?photoId=${photo.photoId}" class="class-photo-background">
                                <img src= "${photo.url}" class= "card-img-top class-img-i" alt="${photo.description}">
                            </a>
                            <div class= "card-body">
                                <h5 class= "card-title text-center">${photo.title}</h5>
                                <p class= "text-right user-name"></p>
                            </div>
                        </div>
                    </div>`;
        let card = parseHTML(html);

        loadUsernameCard(card, photo.userId);

        return card;

    },

    asCategoryCard: function (category) {

        let html = `<div class= "col-md-4 mx-auto">
                        <div class="card class-photo-icat">
                            <a href="detailsphoto.html?photoId=${category.photoId}" class="class-photo-background">
                                <img src="${category.url}"
                                    class="card-img-top class-img-i" alt="${category.description}">
                            </a>


                            <div class=" card-body ">
                                <h5 class="card-title text-center"> ${category.title}</h5>
                                <div class="text-center">
                                    <p class=" card-text btn btn-info">${category.NAME}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },

    //Loads photo, photo title and category name

    asCategoryCard2: function (category) {

        let html = `<div class= "col-md-4 mx-auto">
                        <div class="card class-photo-icat">
                            <a href="detailsphoto.html?photoId=${category.photoId}" class="class-photo-background">
                                <img src="${category.url}"
                                    class="card-img-top class-img-i" alt="${category.description}">
                            </a>


                            <div class=" card-body ">
                                <h5 class="card-title text-center"> ${category.title}</h5>
                                <div class="text-center">
                                    <p class=" card-text btn btn-info">${category.NAME}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },

    //Loads photo and photo title

    asCardPublication: function (photo) {

        let html = `<div class= "col-md-4 mx-auto">
                        <div class= "card class-photo-ipub">
                            <a href= "detailspublicationphoto.html?photoId=${photo.photoId}" class="class-photo-background">
                                <img src= "${photo.url}" class= "card-img-top class-img-ipub" alt="${photo.description}">
                            </a>
                            <div class= "card-body">
                                <h5 class= "card-title text-center">${photo.title}</h5>
                            </div>
                        </div>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },

    //Loads photo and photo title

    asCardPublication2: function (photo) {

        let html = `<div class= "col-md-4 mx-auto">
                        <div class= "card class-photo-ipub">
                            <a href= "detailsphoto.html?photoId=${photo.photoId}" class="class-photo-background">
                                <img src= "${photo.url}" class= "card-img-top class-img-ipub" alt="${photo.description}">
                            </a>
                            <div class= "card-body">
                                <h5 class= "card-title text-center">${photo.title}</h5>
                            </div>
                        </div>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },

    //Loads photo, photo title and rating

    asCardRating: function (rating) {


        let html = `<div class="col-md-4 mx-auto">
                        <div class="card class-photo-ir">
                            <div class="class-photo-background">
                                <a href="detailsphoto.html?photoId=${rating.photoId}" >
                                    <img src= "${rating.url}" class= "card-img-top class-img-ir class-img-i" alt="${rating.description}">
                                </a>
                            </div>

                            <div class=" card-body ">
                                <h5 class="card-title text-center">${rating.title}</h5>
                                <p class="card-text text-center">Valorada con ${rating.punctuation}⭐ el <span class="class-date"></span> </p>

                            </div>
                        </div>
                    </div>`;


        let card = parseHTML(html);
        
        loadDateCard(card,rating.dateP);

        return card;

    },

    asCardComment: function (comment) {


        let html = `<div class="col-md-4 mx-auto">
                        <div class="card class-photo-ic">
                            <a href="detailsphoto.html?photoId=${comment.photoId}" class="class-photo-background"><span class="photo-img"></span>
                            </a>


                            <div class=" card-body ">
                                <h5 class="card-title text-center photo-title"></h5>
                                <p class="card-text text-center"><span class="class-date"></span><br><span class="user-name text-dark font-weight-bold"></span> ha comentado: ${comment.txt}</p>

                            </div>
                        </div>
                    </div>`;


        let card = parseHTML(html);

        loadUsernameCard3(card, comment.userId);

        loadPhotoTitleById2(card, comment.photoId);
        loadPhotoById2(card, comment.photoId);
        loadDateCard(card,comment.dateP);

        return card;

    },

    //Loads photo title, description, user, date and rating in detailsphoto.html

    asDetails1: function (photo) {


        let html = `<div class=" col-md ">

                        <h3>${photo.title}</h3>
                        <h6 class="class-description-photo">${photo.description}</h6>
                        <p class="class-description-photo"> Subida por<a href="userprofile.html?userId=${photo.userId}" class="user-name"></a> el <span class="class-date"></span></p>
                        <p class="photo-rating class-description-photo"></p>
                        <br>
                    </div>`;

        let card = parseHTML(html);

        loadUsernameCard2(card, photo.userId);
        loadPhotoRating(card, photo.photoId);
        loadDateCard(card, photo.uploadDate);

        return card;

    },

    //Loads photo in detailsphoto.html

    asDetails2: function (photo) {


        let html = `<img src="${photo.url}"
                        class="img-fluid" width="600" alt="${photo.description}">`;

        let card = parseHTML(html);

        return card;

    },

    //Loads URL button in detailsphoto.html

    asDetails3: function (photo) {


        let html = `<a href="${photo.url}"
                        class="btn btn-secondary" alt="${photo.description}">
                        URL de fotografía
                    </a>`;

        let card = parseHTML(html);

        return card;

    },

    //Loads category name and uses

    asCardTCategory: function (category) {


        let html = `<div class=" col-md-4 mx-auto">
                        <div class="card class-photo-i2">
                            <div class=" card-body ">
                                <h5 class="card-title text-center"><span class="class-category-text">${category.NAME}</span> <br><br>(${category.uses}<span class="class-uses"></span>)</h5> 
                            </div>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        loadUse(category.uses, card);

        return card;

    },

    //Loads user profile picture, username and followers

    asCardTUser1: function (user) {


        let html = `<div class="col-md-4 mx-auto">
                        <div class="card class-photo-i22">

                            <a href="userprofile.html?userId=${user.userId2}"><img src="${user.profilePictureURL}"
                                class="card-img-top class-img-i3" alt="Foto de perfil"></a> 

                            <div class=" card-body ">
                                <h5 class="card-title text-center">${user.userName}<br>(${user.nfollowers}<span class="class-followers"></span>)</h5>
                            </div>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        loadUserFollowers(user.nfollowers, card);

        return card;

    },

    //Loads user profile picture, username and rating

    asCardTUser2: function (user) {


        let html = `<div class="col-md-4 mx-auto">
                        <div class="card class-photo-i22">

                            <a href="userprofile.html?userId=${user.userId}"><img src="${user.profilePictureURL}"
                                class="card-img-top class-img-i3" alt="Foto de perfil"></a> 

                            <div class=" card-body ">
                                <h5 class="card-title text-center">${user.userName} <br><p class="user-rating"></p></h5>
                            </div>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        loadUserRating(card,user);

        return card;

    },

    //Loads photo, photo title and rating

    asCardTPhoto1: function (photo) {


        let html = `<div class="col-md-4 mx-auto">
                        <div class="card class-photo-i2">

                            <a href="detailsphoto.html?photoId=${photo.photoId}" class="class-photo-background"><img src="${photo.url}"
                                class="card-img-top class-img-i21" alt="${photo.description}"><a>

                            <div class=" card-body ">
                                <h5 class="card-title text-center">${photo.title} <br><br><p class="photo-rating"></p></h5>
                            </div>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        loadPhotoRating(card, photo.photoId);

        return card;

    },

    //Loads photo, photo title and comments

    asCardTPhoto2: function (photo) {


        let html = `<div class="col-md-4 mx-auto">
                        <div class="card class-photo-i21">

                            <a href="detailsphoto.html?photoId=${photo.photoId}" class="class-photo-background"><img src="${photo.url}"
                                class="card-img-top class-img-i21" alt="${photo.description}"></a>

                            <div class=" card-body ">
                                <h5 class="card-title text-center">${photo.title} <br>(${photo.nComments}<span class="class-comments"></span>)</h5>
                            </div>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        loadPhotoComments(photo.nComments,card);

        return card;

    },

    //Loads photo title, description, date, visibility and rating in detailspublicationphoto.html

    asDetailsPublication1: function (photo) {


        let html = `<div class="row text-center class-td-detalle">
                        <div class=" col-md ">

                            <h3>${photo.title}</h3>
                            <h6 class="class-description-photo">${photo.description}</h6>
                            <p class="class-description-photo"> Subida el <span class="class-date"><span></p>
                            <p class="class-description-photo"> Visibilidad: ${photo.visibility}</p>
                            <p class="photo-rating"></p>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        loadPhotoRating(card, photo.photoId);
        loadDateCard(card, photo.uploadDate);

        return card;

    },

    //Loads foto in detailspublicationphoto.html
    
    asDetailsPublication2: function (photo) {


        let html = `<img src="${photo.url}"
                                class="img-fluid" width="600" alt="${photo.description}">`;

        let card = parseHTML(html);

        return card;

    },

    //Loads URL button in detailspublicationphoto.html

    asDetailsPublication3: function (photo) {


        let html = `<a href="${photo.url}" class="btn btn-secondary">
                     URL de fotografía
                    </a>`;

        let card = parseHTML(html);

        return card;

    },

    //Loads user profile picture and username in users.html

    asCardUser: function (user) {


        let html = `<div class=" col-md-4 mx-auto class-photo-e3">
                        <a href="userprofile.html?userId=${user.userId}">
                            <img src="${user.profilePictureURL}"
                                class="card-img-top class-img-ie3" alt="Foto de perfil">
                        </a>

                        <div class=" card-body ">
                            <h5 class="card-title text-center">${user.userName}</h5>
                        </div>
                    </div>`;

        let card = parseHTML(html);

        return card;

    }

};

//Loads userName in p

function loadUsernameCard(card, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let userName = users[0].userName;
            let p = card.querySelector("p.user-name");
            p.textContent = userName;
        }
        );
}

//Loads userName in a

function loadUsernameCard2(card, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let userName = users[0].userName;
            let a = card.querySelector("a.user-name");
            a.textContent = " " + userName;
        }
        );
}

//Loads userName in span

function loadUsernameCard3(card, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let userName = users[0].userName;
            let span = card.querySelector("span.user-name");
            span.textContent = " " + userName;
        }
        );
}

//Loads the uses of a category

function loadUse(use, card) {

    let span = card.querySelector("span.class-uses");
    //let use = category[0].usos;

    if(use>1 || use==0){
        span.textContent = " usos";
    }else{
        span.textContent = " uso";
    }
    
}

//Loads " comentarios" if nComments is >1 or =0, and load " comentario" if nComments =0

function loadPhotoComments(nComments, card) {

    let span = card.querySelector("span.class-comments");

    if(nComments>1 || nComments==0){
        span.textContent = " comentarios";
    }else{
        span.textContent = " comentario";
    }
    
}

//Loads " seguidores" if nFollowers is >1 or =0, and load " seguidor" if nFollowers =0"

function loadUserFollowers(nFollowers, card) {

    let span = card.querySelector("span.class-followers");

    if(nFollowers>1 || nFollowers==0){
        span.textContent = " seguidores";
    }else{
        span.textContent = " seguidor";
    }
    
}

//Loads " Foto sin valoraciones" if prating==null, and load prating + "/5⭐" if prating!=null

function loadPhotoRating(card, photoId) {
    ratingsAPI.getPhotoRating(photoId)
        .then(rating => {
            let prating = rating[0].punctuation;
            let p = card.querySelector("p.photo-rating");

            if (prating == null) {
                p.textContent = "Foto sin valoraciones";
            }else if(prating.toString().length > 4){ 
                
                p.textContent = prating.toFixed(2) + "/5⭐";
            
            }else {
                p.textContent = prating + "/5⭐";
            }
        }
        );
}

//Loads user rating

function loadUserRating(card, user) {

    let urating = user.punctuation;
    let p = card.querySelector("p.user-rating");

    if(urating.toString().length > 4){ 
        
        p.textContent = "(" + urating.toFixed(2) + "/5⭐)";
    
    }else {
        p.textContent = "(" + urating + "/5⭐)";
    }
    
}

//Loads a photo title with its id

function loadPhotoTitleById2(card, photoId) {
    photosAPI.getById(photoId)
        .then(photo => {
            let res = photo[0].title;
            let h = card.querySelector("h5.photo-title");

            h.textContent = res;
        }
        );
}

//Loads a photo with its id

function loadPhotoById2(card, photoId) {
    photosAPI.getById(photoId)
        .then(photo => {
            const img = document.createElement("img");

            let res = photo[0].url;

            img.classList.add("card-img-top", "class-img-ir", "class-img-i");

            let src = res;

            img.src=src;

            let span = card.querySelector("span.photo-img");
            span.appendChild(img);

        }
        );
}

//Loads the correct date

function loadDateCard(card, dateP) {

    let span = card.querySelector("span.class-date");
   
    let date = dateP.toString();

    let dateSub =  date.substring(5,26);


    if(dateSub.includes("Jan")){
        let dateRes = dateSub.replace(" Jan ","/01/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Feb")){
        let dateRes = dateSub.replace(" Feb ","/02/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Mar")){
        let dateRes = dateSub.replace(" Mar ","/03/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Apr")){
        let dateRes = dateSub.replace(" Apr ","/04/");
        span.textContent = dateRes;
    }else if(dateSub.includes("May")){
        let dateRes = dateSub.replace(" May ","/05/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Jun")){
        let dateRes = dateSub.replace(" Jun ","/06/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Jul")){
        let dateRes = dateSub.replace(" Jul ","/07/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Aug")){
        let dateRes = dateSub.replace(" Aug ","/08/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Sep")){
        let dateRes = dateSub.replace(" Sep ","/09/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Oct")){
        let dateRes = dateSub.replace(" Oct ","/10/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Nov")){
        let dateRes = dateSub.replace(" Nov ","/11/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Dec")){
        let dateRes = dateSub.replace(" Dec ","/12/");
        span.textContent = dateRes;
    }else{
        span.textContent = dateSub;
    }

}


export { photoRenderer };