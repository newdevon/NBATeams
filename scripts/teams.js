require("dotenv").config();

const createCard = (team) => {
    //the div (row class) that we are appending a child to
    const cardRows = document.getElementById("cardRows");
    // indent
    const box = document.createElement("div");
    box.setAttribute('class',"col-sm-12 col-md-6 col-lg-3 mb-sm-0 p-3");
    // indent
    const teamCard = document.createElement("div");
    teamCard.setAttribute('class',"card");
    // indent
    const bgImage = document.createElement("img");
    bgImage.setAttribute('class',"card-img-top");
    bgImage.src = team.logo;
    const cardBody = document.createElement("div");
    cardBody.setAttribute('class', "card-body");
    // indent
    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute('class',"card-title");
    //cardTitle.innerHTML(team.name);
    cardTitleText = document.createTextNode(team.name);
    cardTitle.appendChild(cardTitleText);
    const cardMessage = document.createElement("p");
    cardMessage.setAttribute('class',"card-text");
    //cardMessage.innerHTML(team.nickname);
    cardMessageText = document.createTextNode(team.nickname);
    cardMessage.appendChild(cardMessageText);

    const teamInfo = ['logo','name','nickname'];
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardMessage);

    teamCard.appendChild(bgImage);
    teamCard.appendChild(cardBody);

    box.appendChild(teamCard);
    // adds every created and filled elememt back to div and HTML file
    cardRows.appendChild(box);
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

const getTeams = () => {

    // api fetch portion
    const nbaAPI = 'https://api-nba-v1.p.rapidapi.com/teams';
    let resData;

    fetch(nbaAPI, options)
    .then(response => response.json())
    .then(response => {
        // console.log("Response: ")
        // console.log(response);
        resData = response.response
        // console.log(typeof resData);
        console.log(resData)
        
        //create bootstrap card for each team
        for(team of resData) {
            createCard(team);
        }
    } )
    .catch(err => console.error(err));
}

