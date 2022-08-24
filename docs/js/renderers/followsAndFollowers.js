import { parseHTML } from "../utils/parseHTML.js";

const fAndFRenderer = {

    asFollow: function (comment) {

        let html = `<p class="text-center align-items-center text-categoria"><img src="${comment.profilePictureURL}" class="class-img-ip" alt="Imagen de perfil">&nbsp;${comment.userName}</p>`;
        let card = parseHTML(html);

        return card;

    },

    asFollower: function (comment) {

        let html = `<p class="text-center align-items-center text-categoria"><img src="${comment.profilePictureURL}" class="class-img-ip" alt="Imagen de perfil">&nbsp;${comment.userName}</p>`;
        let card = parseHTML(html);

        return card;

    },
};

export { fAndFRenderer };