"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const categoriesAPI = {

    getAll: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/categories`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    getAllData: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/categories/allData`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_categories_by_photoId: function (photoId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/categories/${photoId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_categories_num_by_photoId: function (photoId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/categories/num/${photoId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_categories_by_name: function (NAME) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/categories/name/${NAME}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_all_data_categories_by_name: function (NAME) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/categories/allData/${NAME}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    create_category: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/categories`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },

    create_photo_category: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/photosCategories`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },

    delete: function (photoId, categoryName) {
        return new Promise(function (resolve, reject) {
            axios.delete(`${BASE_URL}/photosCategories/${photoId}/${categoryName}`, requestOptions)
                 .then(response => resolve(response.data))
                 .catch(error => reject(error.response.data.message));
        });
    },
    

};

export { categoriesAPI };