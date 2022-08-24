" use strict ";
import { commentsAPI } from "/js/api/comments.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { inappropriateWordsAPI } from "/js/api/inappropriateWords.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {

    //Comment a photo

    let commentForm = document.getElementById("id-form-comment-photo");
    commentForm.onsubmit = handleCommentPhoto;

}



function handleCommentPhoto(event) {
   
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    
    //Checks if comment contains innapropriate words

    inappropriateWordsAPI.get_inappropriateWords()
        .then(words => {

            let errors = [];

            let inappropriateWords = [];
            for (let p of words) {
                inappropriateWords.push(p.word);
            }

            let txt = formData.get("txt");   //FA


            let arrT = txt.toLowerCase();

            for (let word of inappropriateWords) {
                if (arrT.includes(word)) {
                    errors.push("El comentario contiene palabras inapropiadas: "+word);
                    break;
                }
            }

            if (errors.length === 0) {
                
                formData.append("userId", sessionManager.getLoggedId()); 
                formData.append("photoId", photoId);

                commentsAPI.create(formData)
                            .then(data => window.location.href=window.location)
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