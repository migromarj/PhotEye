"use strict";
import { parseHTML } from "../utils/parseHTML.js";
import { photoRenderer } from "./photos.js";


const galleryRenderer = {

    //As card in index.html and photosoffollowed.html

    asCardGallery: function (photos) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asCard(photo);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in categories.html

    asCardCategoryGallery:function (categories) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let category of categories) {
            let card = photoRenderer.asCategoryCard(category);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row"> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in searchcategories.html

    asCardCategoryGallery2:function (categories) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let category of categories) {
            let card = photoRenderer.asCategoryCard2(category);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row"> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in publications.html

    asCardPublicationGallery: function (photos) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asCardPublication(photo);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in userpublications.html

    asCardPublicationGallery2: function (photos) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asCardPublication2(photo);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in ratings.html

    asCardRatingsGallery: function (ratings) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let rating of ratings) {
            let card = photoRenderer.asCardRating(rating);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in comments.html

    asCardCommentsGallery: function (comments) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let comment of comments) {
            let card = photoRenderer.asCardComment(comment);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    },

    //As card in users.html

    asCardUsersGallery: function (users) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let user of users) {
            let card = photoRenderer.asCardUser(user);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }

        let sp = parseHTML('<br> ');
        galleryContainer.appendChild(sp);

        return galleryContainer;
    },

    //As card in trendscategories.html

    asCardTCategoriesGallery: function (categories) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let category of categories) {
            let card = photoRenderer.asCardTCategory(category);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }

        return galleryContainer;
    },

    //As card in trendsusers.html

    asCardTUsers1Gallery: function (users) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let user of users) {
            let card = photoRenderer.asCardTUser1(user);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }

        return galleryContainer;
    },

    //As card in trendsusers.html

    asCardTUsers2Gallery: function (users) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let user of users) {
            let card = photoRenderer.asCardTUser2(user);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }

        return galleryContainer;
    },

    //As card in trendsphotos.html

    asCardTPhotos1Gallery: function (photos) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asCardTPhoto1(photo);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }

        return galleryContainer;
    },

    //As card in trendsphotos.html

    asCardTPhotos2Gallery: function (photos) {
        let galleryContainer = parseHTML('<div class="photo-gallery"> </div>');
        let row = parseHTML('<div class="row"> </div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asCardTPhoto2(photo);
            row.appendChild(card);
            counter += 1;
            if (counter % 3 === 0) {
                row = parseHTML('<div class= " row "> </div> ');
                galleryContainer.appendChild(row);
            }
        }

        return galleryContainer;
    },

};
export { galleryRenderer };