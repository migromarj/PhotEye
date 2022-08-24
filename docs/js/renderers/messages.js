"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

// Aux function to get the div in which to display messages
// It's centralized here so we can change it easily in the case its ID changes
const msgsDivID = "errors";

function getErrorsDiv() {
    return document.getElementById(msgsDivID);
}

const messageRenderer = {

    showMessageAsAlert: function (message, bootClass) {
        let html = `<div class="alert alert-${bootClass} alert-dismissible col-md-12">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <span class="class-message"><span>
                    </div>`;
        let errorsDiv = getErrorsDiv();

        if (errorsDiv === null) {
            console.error('You tried to render the following message, however, a ' +
                `<div id="${msgsDivID}"> could not be found in your view to show it there:`);
            console.error(message);
            return;
        }

        let messageElem = parseHTML(html);
        errorsDiv.appendChild(messageElem);

        loadErrorCard(messageElem, message);

    },

    showErrorMessage: function (message) {
        this.showMessageAsAlert(message, "danger");
    },

    showWarningMessage: function (message) {
        this.showMessageAsAlert(message, "warning");
    },

    showSuccessMessage: function (message) {
        this.showMessageAsAlert(message, "success");
    },
}

function loadErrorCard(card, message) {

    let span = card.querySelector("span.class-message");

    let messageS = message.toString();

    if (messageS == "Not found") {

        span.textContent = "No hay contenido que mostrar en esta página";

    } else if (messageS.includes("Duplicate entry") && messageS.includes("for key 'userId'")) {
        span.textContent = "Ya has valorado anteriormente esta foto";
    } else if (messageS.includes("Duplicate entry") && messageS.includes("for key 'NAME'")) {
        span.textContent = "La categoría que quiere añadir ya se encuentra disponible en la aplicación";
    } else if (messageS.includes("Duplicate entry") && messageS.includes("for key 'userName'")) {
        span.textContent = "El nombre de usuario introducido ya pertenece a otra cuenta";
    } else if (messageS.includes("There already exists another user with that email")) {
        span.textContent = "El email introducido ya pertenece a otra cuenta";
    } else if (messageS.includes("Duplicate entry") && messageS.includes("for key 'email'")) {
        span.textContent = "El email introducido ya pertenece a otra cuenta";
    } else if (messageS.includes("The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.")) {
        span.textContent = "El contenido mostrado no se encontró en el servidor. Verifique la ortografía y vuelva a intentarlo.";
    }else if (messageS.includes("The password is not correct")) {
        span.textContent = "La contraseña no es correcta.";
    }else if (messageS.includes("Duplicate entry") && messageS.includes("for key 'photoId'")) {
        span.textContent = "La categoría que se intenta añadir ya está asociada a la foto.";
    }else if (messageS.includes("The session token is not valid")) {
        span.textContent = "Debe estar autenticado para poder realizar esta acción.";
    } else if(messageS.includes("User not found")){
        span.textContent = "El email introducido no pertenece a ningún usuario.";
    } else if(messageS.includes("Duplicate entry") && messageS.includes("for key 'phoneNumber'")){
        span.textContent = "El teléfono introducido ya pertenece a otra cuenta";
    }  else {
        span.textContent = message;
    }
}

export { messageRenderer };


