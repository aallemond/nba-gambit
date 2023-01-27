const score = document.querySelector(".live-game-1")
const scoreTwo = document.querySelector(".live-game-2")
const scoreThree = document.querySelector(".live-game-3")
const scoreFour = document.querySelector(".live-game-4")
const scoreFive = document.querySelector(".live-game-5")

var scoreCards = {score, scoreTwo, scoreThree, scoreFour, scoreFive};

score.textContent = "Card 1"
scoreTwo.textContent = "Card 2"
scoreThree.textContent = "Card 3"
scoreFour.textContent = "Card 4"
scoreFive.textContent = "Card 5"



// Gets live game data from the API-NBA
function getLiveGames(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4262cffb3msh1a488567c412cd4p185ce0jsndeb4af0e0827',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/games?live=all', options)
        .then(function(response){
            console.log(response.status)
            return response.json();
        })

        .then(function(data){
            displayGames(data);
        })
    
  
  
    }

    // Function to display live game data in the appropriate div
    function displayGames(teamData) {
        console.log (teamData)
        
        var teamBoxEl = document.getElementById('teamBox');
        
        // For loop to go through the returned json data and get the names and logos of each team
        var gamesList = teamData.response;
        for (let i = 0; i < gamesList.length; i++) {
            var homeTeam = gamesList[i].teams.home.name;
            var homeLogo = gamesList[i].teams.home.logo;
            var visitorTeam = gamesList[i].teams.visitors.name;
            var visitorLogo = gamesList[i].teams.visitors.logo;
            console.log (homeTeam, homeLogo, visitorTeam, visitorLogo )

            var homeTeamNameEl = document.createElement("li")
            teamBoxEl.textContent = homeTeam;
            teamBoxEl.appendChild(homeTeamNameEl);

            var visitorTeamNameEl = document.createElement("li")
            teamBoxEl.textContent = visitorTeam;
            teamBoxEl.appendChild(visitorTeamNameEl, visitorLogo);

        }

    }
    
    getLiveGames()
