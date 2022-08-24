"use strict";
import { parseHTML } from "../utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";

const accountRenderer = {

    //Code for account.html

    asAccountCard: function (user) {

        let html = `<div>
                        <div class="row text-center ">
                            <span class="col-md-4">

                                    <img src="${user.profilePictureURL}"
                                        class="card-img-top class-img-account" alt="Foto de perfil">


                                    <div class="class-nombre-cuenta">

                                        <p>${user.name}</p>
                                        <p>${user.surnames}</p>

                                    </div>

                            </span>
                            <div class=" col-md-8 class-datos-cuenta">
                                <p><span class="account-publications"></span> publicaciones</p>
                                <p><span class="account-comments"></span> comentarios</p>
                                <p><span class="account-followers"></span> <button type="button" class="btn btn-warning" data-toggle="modal"
                                        data-target="#id-seguidores">Seguidores</button></p>
                                <p><span class="account-follows"></span> <button type="button" class="btn btn-warning" data-toggle="modal"
                                        data-target="#id-seguidos">Seguidos</button></p>
                            </div>

                        </div>
                    </div>`;
        let card = parseHTML(html);

        loadPublicationsCard(card, user.userId);
        loadCommentsCard(card, user.userId);
        loadFollowersCard(card, user.userId);
        loadFollowsCard(card, user.userId);

        return card;

    },
};

//Loads number of publications

function loadPublicationsCard(card, userId) {
    usersAPI.getNPublications(userId)
        .then(users => {
            let nPublications = users[0].nPublications;
            let span = card.querySelector("span.account-publications");

            if (nPublications == null) {
                span.textContent = "0";
            } else {
                span.textContent = nPublications;
            }
        }
        );
}

//Loads number of comments

function loadCommentsCard(card, userId) {
    usersAPI.getNComments(userId)
        .then(users => {
            let nComments = users[0].nComments;
            let span = card.querySelector("span.account-comments");

            if (nComments == null) {
                span.textContent = "0";
            } else {
                span.textContent = nComments;
            }
        }
        );
}

//Loads number of followers

function loadFollowersCard(card, userId) {
    usersAPI.getNFollowers(userId)
        .then(users => {
            let nFollowers = users[0].nFollowers;
            let span = card.querySelector("span.account-followers");

            if (nFollowers == null) {
                span.textContent = "0";
            } else {
                span.textContent = nFollowers;
            }
        }
        );
}

//Loads number of follows

function loadFollowsCard(card, userId) {
    usersAPI.getNFollows(userId)
        .then(users => {
            let nFollows = users[0].nFollows;
            let span = card.querySelector("span.account-follows");

            if (nFollows == null) {
                span.textContent = "0";
            } else {
                span.textContent = nFollows;
            }
        }
        );
}



export { accountRenderer };