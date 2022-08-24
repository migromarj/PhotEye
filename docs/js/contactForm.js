" use strict ";
import { contactFormsAPI } from "/js/api/contactForms.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function main() {
    let contactForm = document.getElementById("id-form-contact");
    contactForm.onsubmit = handleContactForm;

}

function handleContactForm(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    
    //Create a contact request

    contactFormsAPI.create(formData)
        .then(data => window.location.href = "index.html")
        .catch(error => messageRenderer.showErrorMessage(error));
}


document.addEventListener("DOMContentLoaded", main);

