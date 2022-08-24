" use strict ";
import { photosAPI } from "/js/api/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { inappropriateWordsAPI } from "/js/api/inappropriateWords.js";

function main() {
    let registerForm = document.getElementById("id-form-upload-photo");
    registerForm.onsubmit = handleSubmitPhoto;

}

function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    inappropriateWordsAPI.get_inappropriateWords()
        .then(words => {

            let errors = [];

            let inappropriateWords = [];
            for (let p of words) {
                inappropriateWords.push(p.word);
            }

            let title = formData.get("title");   //FA
            let description = formData.get("description");  //FA


            let arrT = title.toLowerCase();
            let arrD = description.toLowerCase();

            for (let word of inappropriateWords) {
                if (arrT.includes(word)) {
                    errors.push("El título contiene palabras inapropiadas: " + word);
                    break;
                }
            }

            for (let word of inappropriateWords) {
                if (arrD.includes(word)) {
                    errors.push("La descripción contiene palabras inapropiadas: " + word);
                    break;
                }
            }

            if (errors.length === 0) {
                let userId = sessionManager.getLoggedId();
                formData.append("userId", userId);   
                photosAPI.create(formData)
                    .then(data => window.location.href = "index.html")
                    .catch(error => messageRenderer.showErrorMessage(error));
            } else {
                let errorDiv = document.getElementById("errors");
                errorDiv.innerHTML = "";
                for (let error of errors) {
                    messageRenderer.showErrorMessage(error);
                }
            }
        })
        .catch(error => messageRenderer.showErrorMessage(error))
}


document.addEventListener("DOMContentLoaded", main);
