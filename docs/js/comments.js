"user strict";
import { galleryRenderer } from "./renderers/gallery.js";
import { commentsAPI } from "/js/api/comments.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

function addCommentsToContainer(comments, commentContainer){
    let commentP = galleryRenderer.asCardCommentsGallery(comments);
    commentContainer.appendChild(commentP);
}

function main() {
    

    //Loads the content in comments.html
    
    let commentContainer = document.querySelector("div.container");

    commentsAPI.get_comments()
             .then(comments => addCommentsToContainer(comments, commentContainer))
             .catch(error => messageRenderer.showErrorMessage(error));

}

document.addEventListener("DOMContentLoaded", main);