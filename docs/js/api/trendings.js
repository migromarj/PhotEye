"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const trendingsAPI = {

    getTCategories: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/trendings/categories`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    }, 

    getTUsers1: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/trendings/users/followers`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    }, 

    getTUsers2: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/trendings/users/punctuation`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    }, 

    getTPhotos1: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/trendings/photos/punctuation`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    }, 
    
    getTPhotos2: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/trendings/photos/comment`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    }, 

};

export { trendingsAPI };