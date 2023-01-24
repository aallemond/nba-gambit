const score = document.querySelector(".live-game-1")
const scoreTwo = document.querySelector(".live-game-2")
const scoreThree = document.querySelector(".live-game-3")
const scoreFour = document.querySelector(".live-game-4")
const scoreFive = document.querySelector(".live-game-5")

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