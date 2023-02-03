//Object to contain game data
const gameData = {};


//Call to API-NBA
const apiNba = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'df399e6de9mshfa4855a7e4f9273p1c1b08jsnb6f096830827',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

    
const a = fetch('https://api-nba-v1.p.rapidapi.com/games?live=all', apiNba)
    .then(function (response) {
    return response.json();
})
    .then(function (firstApi) {
        for (let i = 0; i < firstApi.response.length; i++) {
            const game = firstApi.response[i];
            if(game.teams.home.name == "LA Clippers"){
                var gameName = 'Los Angeles Clippers__' + game.teams.visitors.name;
            }
            else if(game.teams.visitors.name == "LA Clippers"){
                var gameName = game.teams.home.name + '__Los Angeles Clippers';
            }
            else{
                var gameName = game.teams.home.name + '__' + game.teams.visitors.name;
            }
            gameData[gameName] = gameData[gameName] || {};
            gameData[gameName].apiNba = game;
        }
    });

//Call to Live Sports Odds
const liveSportsOdds = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '283b1d0903msh18c6e7ed2aadb94p199924jsnf17ace9e98da',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
};
    
const b = fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=h2h&dateFormat=iso', liveSportsOdds)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Network Reponse Error")
        }
    })
    .then(function (secondApi) {
        for (let i = 0; i < secondApi.length; i++) {
            const game = secondApi[i];
            const gameName = game.home_team + '__' + game.away_team;
            gameData[gameName] = gameData[gameName] || {};
            gameData[gameName].liveSportsOdds = game;
        }
    secondApi.forEach(game => { const gameName = game.home_team + '__' + game.away_team; gameData[gameName] = gameData[gameName] || {}; gameData[gameName].liveSportsOdds = game; });
    });

    console.log(gameData);
    Promise.all([a,b]).then(() => displayInfo(gameData)); 

displayInfo();
        
            
function displayInfo(gameData){
            
    console.log(gameData);

            

    var count = 9; //This is to keep track of how many of the divs are not filled with data
    
    //creates arrays of all the elements in the game cards, index = the card its is pointing to
    const scoreDisplayAway = document.querySelectorAll(".visitor")
    const scoreDisplayHome = document.querySelectorAll(".home")
    const logoDisplayHome = document.querySelectorAll(".homelogo")
    const logoDisplayAway = document.querySelectorAll(".awaylogo")
    const teamNameDisplayHome = document.querySelectorAll(".teamname-home")
    const teamNameDisplayAway = document.querySelectorAll(".teamname-away")
    const awayTeamOdds = document.querySelectorAll(".away-odds")
    const homeTeamOdds = document.querySelectorAll(".home-odds")
    const timeInGame = document.querySelectorAll(".game-time")
    const gameCards = document.querySelectorAll(".invisible")

    let i = 0; //allows for indexing of element arrays
    for (const key in gameData) {
        
        const game = gameData[key];
        console.log(game);
        
        //Data from API-NBA is stored in consts
        const teamNameHome = game.apiNba.teams.home.name
        const teamNameAway = game.apiNba.teams.visitors.name
        const pointsHome = game.apiNba.scores.home.points
        const pointsAway = game.apiNba.scores.visitors.points
        const homeLogo = game.apiNba.teams.home.logo
        const awayLogo = game.apiNba.teams.visitors.logo
        
        //creates keys for navigation of the Live Sports Odds api data
        var draftKingsKey;
        for(let i = 0; i < game.liveSportsOdds.bookmakers.length; i++)
        {
            if(game.liveSportsOdds.bookmakers[i].key == 'draftkings')
            {
                draftKingsKey = i;
                break;
            }
        }
        console.log(game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[0].price);
        
        var awayNameKey;
        var homeNameKey;
        if(game.liveSportsOdds.away_team == game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[0].name)
        {
            awayNameKey = 0;
            homeNameKey = 1;
        }
        else
        {
            awayNameKey = 1;
            homeNameKey = 0;
        }
        
        //gets the odds for each team in the game
        if(game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[awayNameKey].price < 0){
            var awayOdds = game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[awayNameKey].price;
            var homeOdds =  "+" + game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[homeNameKey].price;
        }
        else{
            var awayOdds = "+" + game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[awayNameKey].price;
            var homeOdds = game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[homeNameKey].price;
        }   
    
        //gets the time and quarter in the game
        var timeLeftInQ = game.apiNba.status.clock;
        if(game.apiNba.status.clock == null)
        {
            timeLeftInQ = "End"
        }
        const quarter = game.apiNba.periods.current;
        var gameTime
        if(quarter == 1)
        {
            gameTime = timeLeftInQ + ' ' + quarter + 'st'
        }
        else if(quarter == 2)
        {
            gameTime = timeLeftInQ + ' ' + quarter + 'nd'
        }
        else if(quarter == 3)
        {
            gameTime = timeLeftInQ + ' ' + quarter + 'rd'
        }
        else if(quarter == 4)
        {
            gameTime = timeLeftInQ + ' ' + quarter + 'th'
        }
        if(game.apiNba.status.halftime == true)
        {
            gameTime = 'Halftime'
        }

        //appending data to the indexed game card
        teamNameDisplayHome[i].innerHTML = ""
        teamNameDisplayAway[i].innerHTML = ""
        teamNameDisplayHome[i].append(teamNameHome)
        teamNameDisplayAway[i].append(teamNameAway)
        logoDisplayHome[i].setAttribute("src", homeLogo)
        logoDisplayHome[i].setAttribute("style", "width:75px")
        logoDisplayHome[i].setAttribute("style", "height:75px")
        logoDisplayAway[i].setAttribute("src", awayLogo)
        logoDisplayAway[i].setAttribute("style", "width:75px")
        logoDisplayAway[i].setAttribute("style", "height:75px")
        scoreDisplayHome[i].innerHTML = "";
        scoreDisplayAway[i].innerHTML = "";
        scoreDisplayHome[i].append(pointsHome)
        scoreDisplayAway[i].append(pointsAway)
        awayTeamOdds[i].append(awayOdds)
        homeTeamOdds[i].append(homeOdds)
        timeInGame[i].append(gameTime)
        gameCards[i].classList.remove("invisible");
        count--;
        i++;
    }
    //If no game cards are populated a message will appear instead
    console.log(count)
    if(count == 9)
    {
        {
            var message = document.createElement("div")
            var textnode = document.createTextNode("There are no live games on right now");
            message.appendChild(textnode);
            document.getElementById("card-list").appendChild(message);
        }
    }
    
}