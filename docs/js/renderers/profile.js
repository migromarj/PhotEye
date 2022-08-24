"use strict";

import { parseHTML } from "../utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";
import { sessionManager } from "/js/utils/session.js";

const profileRenderer = {

    //Code for profile.html

    asProfile: function (user) {

        let html = `<div>
                        <div class="row text-center ">
                            <div class="col-md-12">
                                <img src="${user.profilePictureURL}"
                                    class="card-img-top class-imagen-perfil" alt="Imagen de perfil">
                            </div>
                        </div>

                        <hr>

                        <div class="row text-center">
                            <div class=" col-md ">
                                <div class=" form-group">
                                    <label class="lb"> Nombre: </label>
                                    <p>${user.name}</p>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <label class="lb"> Apellidos: </label>
                                    <p>${user.surnames}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col-md">
                                <div class="form-group">
                                    <label class="lb"> Email: </label>
                                    <p>${user.email}</p>
                                </div>
                            </div>
                            <div class=" col-md ">
                                <div class=" form-group">
                                    <label class="lb"> Teléfono: </label>
                                    <p>${user.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row text-center">
                            <!--<div class=" col-md ">
                                <div class=" form-group">
                                    <label class="lb"> Contraseña: </label>
                                    <p>${user.password}</p>
                                </div>
                            </div>
                            <div class=" col-md ">
                                <div class=" form-group">
                                    <label class="lb"> Nombre de usuario: </label>
                                    <p>${user.userName}</p>
                                </div>
                            </div>-->
                            
                        </div>
                        <div class="row text-center">
                            <div class=" col-md ">
                                <div class=" form-group">
                                    <label class="lb"> Nombre de usuario: </label>
                                    <p>${user.userName}</p>
                                </div>
                            </div>
                            <div class=" col-md">
                                <div class=" form-group">
                                    <label class="lb"> URL foto de perfil: </label>
                                    <p><a href="${user.profilePictureURL}">Enlace</a></p>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="row">
                            <div class="col-md text-center">
                                <a class="btn btn-warning btn-lg" href="editprofile.html?userId=${user.userId}" role="button">Editar perfil</a>
                            </div>
                        </div>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },

    //Code for searchprimary.html ,searchusers.html and userprofile.html()

    asUserProfile: function (user, userRegister) {

        let html = `<div>

                        <div class="row text-center class-title-perfil">
                            <h2>Perfil de ${user.userName}</h2>
                        </div>

                        <div class="container class-todo-perfil">
            
                            <div class="row text-center ">
                                <div class="col-md-12">
                                    <img src="${user.profilePictureURL}"
                                        class="card-img-top class-imagen-perfil" alt="Imagen de perfil">
                                        &nbsp;&nbsp;<span class="class-follow-button"></span>
                                       
                                        <!--<a href="#" class="btn btn-primary btn-lg" role="button">Seguir</a>-->
                                        
                                </div>
                            </div>

                            <hr>

                            <div class="row text-center">
                                <div class=" col-md ">
                                    <div class=" form-group">
                                        <label class="lb"> Nombre: </label>
                                        <p>${user.name}</p>
                                    </div>
                                </div>
                                <div class="col-md">
                                    <div class="form-group">
                                        <label class="lb"> Apellidos: </label>
                                        <p>${user.surnames}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row text-center">
                                <div class="col-md">
                                    <div class="form-group">
                                        <label class="lb"> Email: </label>
                                        <p>${user.email}</p>
                                    </div>
                                </div>
                                <div class=" col-md ">
                                    <div class=" form-group">
                                        <label class="lb"> Nombre de usuario: </label>
                                        <p>${user.userName}</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row text-center">
                                <div class=" col-md ">
                                <a href="userpublications.html?userId=${user.userId}" class="btn btn-success btn-lg" role="button">Ver publicaciones</a>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-md text-center">
                                <a href="index.html" class="btn btn-secondary btn-lg" role="button">Ir a inicio</a>
                                <a href="users.html" class="btn btn-primary btn-lg" role="button">Ir a usuarios</a>
                            </div>
                        </div>
                        <br>
                    </div>`;
        let card = parseHTML(html);

        if(sessionManager.isLogged()){

            loadButton(user.userId, userRegister, card);

        }
        

        return card;

    },

};

//Loads a button to follow or unfollow people 

function loadButton(user, userRegister, card) {
    usersAPI.getBin(userRegister, user)
        .then(num => {

            if(user!=userRegister){
                let bin = num[0].bin;

                if (bin == 0) {
                    const btn = document.createElement("button");

                    let formData = new FormData();
                    formData.append("userId1", userRegister);
                    formData.append("userId2", user);

                    btn.classList.add("btn", "btn-primary", "btn-lg");
                    btn.innerText = "Seguir";

                    btn.addEventListener("click", function () {
                        usersAPI.create(formData)
                                .then(data => location.href="userprofile.html?userId="+user);;
                    });

                    let span = card.querySelector("span.class-follow-button");
                    span.appendChild(btn);
                } else if (bin == 1) {

                    const btn = document.createElement("button");

                    btn.classList.add("btn", "btn-danger", "btn-lg");
                    btn.innerText = "Dejar de seguir";

                    btn.addEventListener("click", function () {
                        usersAPI.delete(userRegister, user)
                                .then(data => window.location.href="userprofile.html?userId="+user);
                    });

                    let span = card.querySelector("span.class-follow-button");
                    span.appendChild(btn);
                }
            }
        }
        );
}


export { profileRenderer };