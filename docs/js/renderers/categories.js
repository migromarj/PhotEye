import { parseHTML } from "../utils/parseHTML.js";

const categoryRenderer = {

    //Loads name of category

    asCard: function (category) {

        let html = `<div class="text-center align-items-center">
                        <p class="text-center align-items-center text-categoria">${category.NAME}                            
                        </p>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },

    asCard2: function (category) {

        let html = `<option>${category.NAME}</option>`;
        let card = parseHTML(html);

        return card;

    },

    //Loads name of category

    asGeneralCard: function (category) {

        let html = `<div class="text-center align-items-center">
                        <p class="text-center align-items-center text-categoria">${category.NAME}</a>
                    </div>`;
        let card = parseHTML(html);

        return card;

    },
};

export { categoryRenderer };