" use_strict ";
import { BASE_URL, requestOptions } from './common.js';
const usersAPI = {

    getAllExcept1: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/user/${userId}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getById: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getByUseName: function (userName) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/username/${userName}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getNPublications: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}/npublications`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getNComments: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}/ncomments`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getNFollows: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}/nfollows`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getNFollowers: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}/nfollowers`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getFollows: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}/follows`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getFollowers: function (userId) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/${userId}/followers`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    getBin: function (userId1,userId2) {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users/exist/${userId1}/${userId2}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    update: function (userId, formData) {  //PUT
        return new Promise(function (resolve, reject) {
            axios.put(`${BASE_URL}/users/${userId}`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    create: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/useruser`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },
    
    delete: function (userId1,userId2) {
        return new Promise(function (resolve, reject) {
            axios.delete(`${BASE_URL}/useruser/${userId1}/${userId2}`, requestOptions)
                 .then(response => resolve(response.data))
                 .catch(error => reject(error.response.data.message));
        });
    },
};
export { usersAPI };