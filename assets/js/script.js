const gameData = {}

// ---------------- NBA API ----------------

const nbaOptions = {
method: "GET",
headers: {
"X-RapidAPI-Key": "YOUR_KEY",
"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
}
}

const fetchNbaGames = fetch(
"https://api-nba-v1.p.rapidapi.com/games?live=all",
nbaOptions
)
.then(res => res.json())
.then(data => {

data.response.forEach(game => {

let gameName

if (game.teams.home.name === "LA Clippers") {
gameName = "Los Angeles Clippers__" + game.teams.visitors.name
}
else if (game.teams.visitors.name === "LA Clippers") {
gameName = game.teams.home.name + "__Los Angeles Clippers"
}
else {
gameName = game.teams.home.name + "__" + game.teams.visitors.name
}

gameData[gameName] = gameData[gameName] || {}
gameData[gameName].apiNba = game

})

})

// ---------------- ODDS API ----------------

const oddsOptions = {
method: "GET",
headers: {
"X-RapidAPI-Key": "YOUR_KEY",
"X-RapidAPI-Host": "odds.p.rapidapi.com"
}
}

const fetchOdds = fetch(
"https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&markets=h2h&oddsFormat=american",
oddsOptions
)
.then(res => res.json())
.then(data => {

data.forEach(game => {

const gameName = game.home_team + "__" + game.away_team

gameData[gameName] = gameData[gameName] || {}
gameData[gameName].liveSportsOdds = game

})

})

// ---------------- COMBINE APIs ----------------

Promise.all([fetchNbaGames, fetchOdds]).then(() => {
displayInfo(gameData)
})

// ---------------- DISPLAY FUNCTION ----------------

function displayInfo(gameData) {

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

let i = 0

for (const key in gameData) {

const game = gameData[key]

// safety check
if (!game.apiNba || !game.liveSportsOdds) continue

const teamNameHome = game.apiNba.teams.home.name
const teamNameAway = game.apiNba.teams.visitors.name

const pointsHome = game.apiNba.scores.home.points
const pointsAway = game.apiNba.scores.visitors.points

const homeLogo = game.apiNba.teams.home.logo
const awayLogo = game.apiNba.teams.visitors.logo

// -------- ODDS --------

let draftKingsKey

for (let j = 0; j < game.liveSportsOdds.bookmakers.length; j++) {

if (game.liveSportsOdds.bookmakers[j].key === "draftkings") {
draftKingsKey = j
break
}

}

if (draftKingsKey === undefined) continue

const outcomes =
game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes

let awayOdds = outcomes[0].price
let homeOdds = outcomes[1].price

if (awayOdds > 0) awayOdds = "+" + awayOdds
if (homeOdds > 0) homeOdds = "+" + homeOdds

// -------- GAME TIME --------

let clock = game.apiNba.status.clock
if (!clock) clock = "End"

const quarter = game.apiNba.periods.current

let gameTime = clock + " Q" + quarter

if (game.apiNba.status.halftime) {
gameTime = "Halftime"
}

// -------- UPDATE DOM --------

teamNameDisplayHome[i].textContent = teamNameHome
teamNameDisplayAway[i].textContent = teamNameAway

logoDisplayHome[i].src = homeLogo
logoDisplayAway[i].src = awayLogo

scoreDisplayHome[i].textContent = pointsHome
scoreDisplayAway[i].textContent = pointsAway

homeTeamOdds[i].append(homeOdds)
awayTeamOdds[i].append(awayOdds)

timeInGame[i].textContent = gameTime

gameCards[i].classList.remove("invisible")

i++

}

}