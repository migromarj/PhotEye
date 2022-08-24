"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const photosAPI = {

    getAll: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/photos`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_photos_index: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/photos`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    getById: function (photoId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/photos/${photoId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            });
    },

    getByUserId: function (userId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/photos/user/${userId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            });
    },

    getByLoggedInId: function (userId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/photos/loggedIn/${userId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            });
    },

    getPFollowedByUserId: function (userId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/photos/userl/${userId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            });
    },

    create: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/photos`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },
    update: function (photoId, formData) {  //PUT
        return new Promise(function (resolve, reject) {
            axios.put(`${BASE_URL}/photos/${photoId}`, formData,requestOptions)
                 .then(response => resolve(response.data))
                 .catch(error => reject(error.response.data.message));
        });
    },
    delete: function (photoId) {
        return new Promise(function (resolve, reject) {
            axios.delete(`${BASE_URL}/photos/${photoId}`, requestOptions)
                 .then(response => resolve(response.data))
                 .catch(error => reject(error.response.data.message));
        });
    },

};

export { photosAPI };