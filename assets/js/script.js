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

// function liveGamePull() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'df399e6de9mshfa4855a7e4f9273p1c1b08jsnb6f096830827',
//             'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//         }
//     };


//     fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores?daysFrom=3', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));



// }

// liveGamePull()
var homeOdds = document.createElement('p');
var awayOdds = document.createElement('p');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '283b1d0903msh18c6e7ed2aadb94p199924jsnf17ace9e98da',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=h2h&dateFormat=iso', options)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
      homeOdds.textContent = data[0].home_team + ' ' + data[0].bookmakers[0].markets[0].outcomes[0].price;
      awayOdds.textContent = data[0].away_team + ' ' + data[0].bookmakers[0].markets[0].outcomes[1].price;
      
      score.append(homeOdds);
      score.append(awayOdds);
  });