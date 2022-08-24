"use strict";

import { BASE_URL, requestOptions } from "./common.js";

const inappropriateWordsAPI = {

    get_inappropriateWords: function () {
        return new Promise(
            function (resolve, reject) {
                axios.get(`${BASE_URL}/inappropriateWords`, requestOptions)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error.response.data.message));
            }
        );
    },
};

export { inappropriateWordsAPI };