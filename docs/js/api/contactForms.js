"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const contactFormsAPI = {

    create: function (formData) { //POST
        return new Promise(
            function (resolve, reject) {
                axios.post(`${BASE_URL}/contactForms`, formData, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
        });
    },

};

export { contactFormsAPI };