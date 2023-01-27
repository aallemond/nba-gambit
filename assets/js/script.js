
// Live Game Attributes API Get Function


function liveGamePull() {

    const apiNBA = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df399e6de9mshfa4855a7e4f9273p1c1b08jsnb6f096830827',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    fetch('https://api-nba-v1.p.rapidapi.com/games?live=all', apiNBA)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network Reponse Error")
            }
        })
        .then(data => {
            console.log(data);
            displayScore(data.response);
        })
        .catch(err => console.error(err));

    // Pulls query parameters from API - team name, logo, scores

    function displayScore(data) {
        const scoreDisplayAway = document.querySelectorAll(".visitor")
        const scoreDisplayHome = document.querySelectorAll(".home")
        const logoDisplayHome = document.querySelectorAll(".homelogo")
        const logoDisplayAway = document.querySelectorAll(".awaylogo")
        const teamNameDisplayHome = document.querySelectorAll(".teamname-home")
        const teamNameDisplayAway = document.querySelectorAll(".teamname-away")
        
    // Loop to required data
        
        for (let i = 0; i < data.length; i++) {
            const dataArray = data[i];
            console.log(dataArray)
            const teamNameHome = dataArray.teams.home.name
            const teamNameAway = dataArray.teams.visitors.name
            const pointsHome = dataArray.scores.home.points
            const pointsAway = dataArray.scores.visitors.points
            const homeLogo = dataArray.teams.home.logo
            const awayLogo = dataArray.teams.visitors.logo
        
        // Show pulled data into individual cards
        
            teamNameDisplayHome[i].innerHTML = "";
            teamNameDisplayAway[i].innerHTML = "";
            teamNameDisplayHome[i].append(teamNameHome)
            teamNameDisplayAway[i].append(teamNameAway)
            logoDisplayHome[i].setAttribute("src", homeLogo)
            logoDisplayHome[i].setAttribute("style", "width:75px")
            logoDisplayAway[i].setAttribute("src", awayLogo)
            logoDisplayAway[i].setAttribute("style", "width:75px")
            scoreDisplayHome[i].innerHTML = "";
            scoreDisplayAway[i].innerHTML = "";
            scoreDisplayHome[i].append(pointsHome)
            scoreDisplayAway[i].append(pointsAway)

        }

    }


}
// Automatically starts the function
liveGamePull()

