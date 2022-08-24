"use strict";
import { parseHTML } from "../utils/parseHTML.js";
import { commentRenderer } from "./comments.js";
import { categoryRenderer } from "./categories.js";
import { fAndFRenderer } from "./followsAndFollowers.js";


const socialRenderer = {

    //Creates a div with all comments

    asComment: function (comments) {
        let galleryContainer = parseHTML('<div class="comment-container"> </div>');
        
        for (let comment of comments) {

            let spaceline = parseHTML('<hr><br>');
            galleryContainer.appendChild(spaceline);
            let card = commentRenderer.asCard(comment);
            galleryContainer.appendChild(card);
        }
        return galleryContainer;
    },

    //Creates a div with all categories

    asCategory: function (categories) {
        let galleryContainer = parseHTML('<div class="categories-container"> </div>');
        
        for (let category of categories) {

            let spaceline = parseHTML('<hr><br>');
            galleryContainer.appendChild(spaceline);
            let card = categoryRenderer.asCard(category);
            galleryContainer.appendChild(card);
        }
        return galleryContainer;
    },


    //Select picker adds category

    asCategory2: function (categories) {
        let galleryContainer = parseHTML('<select name="NAME" id="id-add-category" class="class-select-picker"> </select>');

        let cnt = parseHTML('<div class="text-center"></div>');
        
        for (let category of categories) {

            let card = categoryRenderer.asCard2(category);
            galleryContainer.appendChild(card);
        }
        cnt.appendChild(galleryContainer);

        return cnt
    },

    //Select picker deletes category

    asCategory3: function (categories) {
        let galleryContainer = parseHTML('<select name="NAME" id="id-dlt-category" class="class-select-picker"> </select>');

        let cnt = parseHTML('<div class="text-center"></div>');
        
        for (let category of categories) {

            let card = categoryRenderer.asCard2(category);
            galleryContainer.appendChild(card);
        }
        cnt.appendChild(galleryContainer);

        return cnt
    },

    //Creates a div with all categories

    asCategoryGeneral: function (categories) {
        let galleryContainer = parseHTML('<div class="categories-container"> </div>');
        
        for (let category of categories) {

            let spaceline = parseHTML('<hr><br>');
            galleryContainer.appendChild(spaceline);
            let card = categoryRenderer.asGeneralCard(category);
            galleryContainer.appendChild(card);
        }
        return galleryContainer;
    },

    //Creates a div with all follows

    asFollow: function (follows) {
        let galleryContainer = parseHTML('<div class="follows-container"> </div>');
        
        for (let follow of follows) {

            let spaceline = parseHTML('<hr><br>');
            galleryContainer.appendChild(spaceline);
            let card = fAndFRenderer.asFollow(follow);
            galleryContainer.appendChild(card);
        }
        return galleryContainer;
    },

    //Creates a div with all followers

    asFollower: function (followers) {
        let galleryContainer = parseHTML('<div class="followers-container"> </div>');
        
        for (let follower of followers) {

            let spaceline = parseHTML('<hr><br>');
            galleryContainer.appendChild(spaceline);
            let card = fAndFRenderer.asFollower(follower);
            galleryContainer.appendChild(card);
        }
        return galleryContainer;
    },
};
export { socialRenderer };