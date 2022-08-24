"user strict";
import { socialRenderer } from "./renderers/social.js";
import { commentsAPI } from "/js/api/comments.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
    
    //Loads comments of a photo
    
    let commentsContainer = document.getElementById("id-photo-comments");

    commentsAPI.get_comment_num_by_photo_id(photoId)
            .then(num => {

                let n = num[0].num;

                if(n>0){

                    commentsAPI.get_comment_by_photo_id(photoId)
                                .then(comments => addCommentsToPhoto(comments, commentsContainer))
                                .catch(error => messageRenderer.showErrorMessage(error));

                }else{
                    
                }

            }); 

}

//Loads comments of a photo

function addCommentsToPhoto(comments, commentsContainer){
    let galleryComment = socialRenderer.asComment(comments);
    commentsContainer.appendChild(galleryComment);
}

document.addEventListener("DOMContentLoaded", main);