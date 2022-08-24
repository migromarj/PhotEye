"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const commentsAPI = {

    get_comments: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/comments`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_comment_by_id: function (commentId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/comments/${commentId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },

    get_comment_by_photo_id: function (photoId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/comments/photo/${photoId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => error);
            });
    },

    get_comment_num_by_photo_id: function (photoId) {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/comments/num/photo/${photoId}`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => error);
            });
    },

    create: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/comments`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },

};

export { commentsAPI };