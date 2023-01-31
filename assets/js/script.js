// Live Game Attributes API Get Function
const gameData = {};

    const apiNba = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df399e6de9mshfa4855a7e4f9273p1c1b08jsnb6f096830827',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/games?live=all', apiNba)
    .then(function (response) {
        return response.json();
    })
    .then(function (firstApi) {
        for (let i = 0; i < firstApi.response.length; i++) {
            const game = firstApi.response[i];
            const gameName = game.teams.home.name + '__' + game.teams.visitors.name;
            gameData[gameName] = gameData[gameName] || {};
            gameData[gameName].apiNba = game;
        }
    });

    const liveSportsOdds = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '283b1d0903msh18c6e7ed2aadb94p199924jsnf17ace9e98da',
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };
    
        fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=h2h&dateFormat=iso', liveSportsOdds)
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
        // Pulls query parameters from First API - team name, logo, scores

           // function displayScore(data) {
               // const scoreDisplayAway = document.querySelectorAll(".visitor")
                //const scoreDisplayHome = document.querySelectorAll(".home")
               // const logoDisplayHome = document.querySelectorAll(".homelogo")
                //const logoDisplayAway = document.querySelectorAll(".awaylogo")
                //const teamNameDisplayHome = document.querySelectorAll(".teamname-home")
                //const teamNameDisplayAway = document.querySelectorAll(".teamname-away")
               
   
                // Loop to required data
                /*
                for (let i = 0; i < data.length; i++) {
                    const dataArray = data[i];
                    console.log(dataArray)
                    const teamNameHome = dataArray.teams.home.name
                    const teamNameAway = dataArray.teams.visitors.name
                    const pointsHome = dataArray.scores.home.points
                    const pointsAway = dataArray.scores.visitors.points
                    const homeLogo = dataArray.teams.home.logo
                    const awayLogo = dataArray.teams.visitors.logo
                */
                // Show pulled data into individual cards
                
                  /*  teamNameDisplayHome[i].innerHTML = "";
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
                    */
        
        

        // Creates a Data Array for the FIRST API (API-NBA) with the team names - UPCOMING GAMES
/*
                function pullUpcomingGamesTeamNames() {   
                    
                    const currentDate = dayjs()
                    const futureDate = currentDate.add(2, 'day').format('YYYY-MM-DD')

                    console.log(futureDate)

                    const options = {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': 'df399e6de9mshfa4855a7e4f9273p1c1b08jsnb6f096830827',
                            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
                        }
                    };
                    
                    fetch('https://api-nba-v1.p.rapidapi.com/games?date=' + futureDate, options)
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error("Network Reponse Error")
                            }
                        })
                        .then(data => {
                            console.log(data);
                            createTeamListUpcomingGames(data.response);
                        })
                        .catch(err => console.error(err));




                function createTeamListUpcomingGames(data) {

                
                    
                for (let i = 0; i < data.length; i++) {
                        const game = data[i];
                        const gameName = game.teams.home.name + "_"+ game.teams.visitors.name;
                        data[gameName] = upcomingList[gameName] || {};
                        data[gameName].apiNba = upcomingList;
                        console.log(gameName)
                    }


                            
                }

                }
*/
        // Pulls the odds from the SECOND API and displays to webpage
                /*
        function pullOddsForGames() {

            pullOddsTeamNames()
            pullUpcomingGamesTeamNames()
            pullScoresTeamNames()


            const liveSportsOdds = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '283b1d0903msh18c6e7ed2aadb94p199924jsnf17ace9e98da',
                    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
                }
            };
            
                fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=h2h&dateFormat=iso', liveSportsOdds)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("Network Reponse Error")
                        }
                    })
                    .then(data => {
                        console.log(data);
                        displayOdds(data)
                    })
                    .catch(err => console.error(err));

                


                function displayOdds(data) {

                    const oddsDisplayAway = document.querySelectorAll(".away-odds")
                    const oddsDisplayHome = document.querySelectorAll(".home-odds")


                    // for (let i = 0; i < oddsNameList.length; i++) {
                    //     const oddsList = oddsNameList[i]
                    //     // const liveList = liveNameList[i]

                    //     for (let c = 0; c < upcomingList.length; c++){
                    //     const upcomeList = upcomingList[c]

                    // if (oddsList === upcomeList) {

                        for (let i=0; i < data.length; i++) {
                        const dataArray = data[i]
                        const awayOdds = dataArray.bookmakers[0].markets[0].outcomes[0].price
                        const homeOdds = dataArray.bookmakers[0].markets[0].outcomes[1].price

                        oddsDisplayHome[i].innerHTML = "";
                        oddsDisplayAway[i].innerHTML = "";
                        oddsDisplayHome[i].append(homeOdds)
                        oddsDisplayAway[i].append(awayOdds)

                        console.log(homeOdds)
                        console.log(awayOdds)

                        }



                    }

        }


        // Gets the upcoming games for the next day through the FIRST API - utilizing dayjs to add a day

        function upcomingGamePull() {

            const currentDate = dayjs()
            const futureDate = currentDate.add(2, 'day').format('YYYY-MM-DD')

            // console.log(futureDate)

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'df399e6de9mshfa4855a7e4f9273p1c1b08jsnb6f096830827',
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
                }
            };
            
            fetch('https://api-nba-v1.p.rapidapi.com/games?date=' + futureDate, options)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Network Reponse Error")
                    }
                })
                .then(data => {
                    console.log(data);
                    displayUpcomingGame(data.response);
                })
                .catch(err => console.error(err));

                function displayUpcomingGame(data) {
                    const logoDisplayHome = document.querySelectorAll(".upcoming-homelogo")
                    const logoDisplayAway = document.querySelectorAll(".upcoming-awaylogo")
                    const teamNameDisplayHome = document.querySelectorAll(".upcoming-teamname-home")
                    const teamNameDisplayAway = document.querySelectorAll(".upcoming-teamname-away")
                    // const upcomingGameDateDisplay = document.querySelectorAll(".upcoming-game-date")
                    
                // Loop to required data
                    
                    for (let i = 0; i < data.length; i++) {
                        const dataArray = data[i];
                        // console.log(dataArray)
                        const teamNameHome = dataArray.teams.home.name
                        const teamNameAway = dataArray.teams.visitors.name
                        const homeLogo = dataArray.teams.home.logo
                        const awayLogo = dataArray.teams.visitors.logo
                        // const upcomingGameDate = dataArray.date.start
                        // const formatDate = upcomingGameDate.toString();
                    
                    // Show pulled data into individual cards
                    
                        teamNameDisplayHome[i].innerHTML = "";
                        teamNameDisplayAway[i].innerHTML = "";
                        teamNameDisplayHome[i].append(teamNameHome)
                        teamNameDisplayAway[i].append(teamNameAway)
                        logoDisplayHome[i].setAttribute("src", homeLogo)
                        logoDisplayHome[i].setAttribute("style", "width:75px")
                        logoDisplayAway[i].setAttribute("src", awayLogo)
                        logoDisplayAway[i].setAttribute("style", "width:75px")
                        // upcomingGameDateDisplay[i].innerHTML = "";
                        // upcomingGameDateDisplay[i].append(formatDate)
                



            }

     
    }

}

// Automatically starts the function
pullOddsForGames()
upcomingGamePull()
liveGamePull()
*/