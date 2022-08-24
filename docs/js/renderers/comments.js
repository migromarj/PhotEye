import { parseHTML } from "../utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";

const commentRenderer = {

    //Loads a comment with its date, user and comment

    asCard: function (comment) {

        let html = `<p class="text-center align-items-center text-categoria"><span class="text-primary class-date-comment"></span><br><br><span class="user-name"></span> ha comentado: "${comment.txt}"</p>`;
        let card = parseHTML(html);

        loadUsernameCard(card, comment.userId);
        loadDateCard(card, comment.dateP);

        return card;

    },
};

//Loads userName

function loadUsernameCard(card, userId) {
    usersAPI.getById(userId)
        .then(users => {
            let userName = users[0].userName;
            let span = card.querySelector("span.user-name");
            span.textContent = userName;
        }
        );
}

//Loads the correct date

function loadDateCard(card, dateP) {

    let span = card.querySelector("span.class-date-comment");
   
    let date = dateP.toString();

    let dateSub =  date.substring(5,26);


    if(dateSub.includes("Jan")){
        let dateRes = dateSub.replace(" Jan ","/01/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Feb")){
        let dateRes = dateSub.replace(" Feb ","/02/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Mar")){
        let dateRes = dateSub.replace(" Mar ","/03/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Apr")){
        let dateRes = dateSub.replace(" Apr ","/04/");
        span.textContent = dateRes;
    }else if(dateSub.includes("May")){
        let dateRes = dateSub.replace(" May ","/05/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Jun")){
        let dateRes = dateSub.replace(" Jun ","/06/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Jul")){
        let dateRes = dateSub.replace(" Jul ","/07/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Aug")){
        let dateRes = dateSub.replace(" Aug ","/08/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Sep")){
        let dateRes = dateSub.replace(" Sep ","/09/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Oct")){
        let dateRes = dateSub.replace(" Oct ","/10/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Nov")){
        let dateRes = dateSub.replace(" Nov ","/11/");
        span.textContent = dateRes;
    }else if(dateSub.includes("Dec")){
        let dateRes = dateSub.replace(" Dec ","/12/");
        span.textContent = dateRes;
    }else{
        span.textContent = dateSub;
    }

}

export { commentRenderer };