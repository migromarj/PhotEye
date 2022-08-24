"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const ratingsAPI = {

    getPhotoRating: function (photoId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/ratings/${photoId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            });
    },

    getRatingPhotosByUser: function (userId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/ratings/user/${userId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            });
    },

    create: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/ratings`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },

}


export { ratingsAPI };