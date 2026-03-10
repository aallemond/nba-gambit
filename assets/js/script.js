const cardList = document.getElementById("card-list");
const teamLogos = {

"Atlanta Hawks":"https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg",
"Boston Celtics":"https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg",
"Brooklyn Nets":"https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg",
"Charlotte Hornets":"https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg",
"Chicago Bulls":"https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg",
"Cleveland Cavaliers":"https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg",
"Dallas Mavericks":"https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg",
"Denver Nuggets":"https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg",
"Detroit Pistons":"https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg",
"Golden State Warriors":"https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
"Houston Rockets":"https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg",
"Indiana Pacers":"https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg",
"Los Angeles Clippers":"https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg",
"Los Angeles Lakers":"https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg",
"Memphis Grizzlies":"https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg",
"Miami Heat":"https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg",
"Milwaukee Bucks":"https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg",
"Minnesota Timberwolves":"https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg",
"New Orleans Pelicans":"https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg",
"New York Knicks":"https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg",
"Oklahoma City Thunder":"https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg",
"Orlando Magic":"https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg",
"Philadelphia 76ers":"https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg",
"Phoenix Suns":"https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg",
"Portland Trail Blazers":"https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg",
"Sacramento Kings":"https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg",
"San Antonio Spurs":"https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg",
"Toronto Raptors":"https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg",
"Utah Jazz":"https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg",
"Washington Wizards":"https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg"

}

// ---------- helpers ----------

function normalizeTeam(name) {
  return name
    .replace("LA ", "Los Angeles ")
    .replace("Trail Blazers", "Portland Trail Blazers")
    .trim();
}

function formatGameTime(game) {

  if (game.status === "Final") {
    return "Final";
  }

  if (game.status === "In Progress") {
    return `${game.time || ""} Q${game.period || ""}`;
  }

  const start = new Date(game.date);
  const now = new Date();

  const diffDays = Math.floor(
    (start.setHours(0,0,0,0) - now.setHours(0,0,0,0)) /
    (1000 * 60 * 60 * 24)
  );

  let dateLabel;

  if (diffDays === 0) {
    dateLabel = "Today";
  }
  else if (diffDays === 1) {
    dateLabel = "Tomorrow";
  }
  else {
    dateLabel = start.toLocaleDateString([], {
      month: "short",
      day: "numeric"
    });
  }

  const timeLabel = new Date(game.date).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });

  return `${dateLabel} ${timeLabel}`;
}

// ---------- build date range ----------

const today = new Date();
const yesterday = new Date(today);
const tomorrow = new Date(today);

yesterday.setDate(today.getDate() - 1);
tomorrow.setDate(today.getDate() + 1);

const start = yesterday.toISOString().split("T")[0];
const end = tomorrow.toISOString().split("T")[0];

// ---------- load APIs ----------

async function loadGames() {

  try {

    const nbaRes = await fetch(
      `https://api.balldontlie.io/v1/games?start_date=${start}&end_date=${end}`,
      {
        headers: {
          Authorization: "31778be2-836e-4103-9c96-0b78d58f1295"
        }
      }
    );

    const nbaData = await nbaRes.json();

    const oddsRes = await fetch(
      `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=5e32da5a88a00f7ead887fc4a1b3fe42`
    );

    const oddsData = await oddsRes.json();

    console.log("NBA Games:", nbaData.data);
    console.log("Odds Games:", oddsData);

    renderGames(nbaData.data, oddsData);

  } catch (err) {
    console.error("API error:", err);
  }

}

// ---------- render ----------

function renderGames(nbaGames, oddsGames) {

  const liveGames = [];
  const upcomingGames = [];

  nbaGames.forEach(game => {

    const home = normalizeTeam(game.home_team.full_name);
    const away = normalizeTeam(game.visitor_team.full_name);

    const oddsGame = oddsGames.find(o =>
      normalizeTeam(o.home_team) === home &&
      normalizeTeam(o.away_team) === away
    );

    let homeOdds = "-";
    let awayOdds = "-";

    if (oddsGame) {

      const bookmaker = oddsGame.bookmakers?.find(
        b => b.key === "draftkings"
      );

      if (bookmaker && bookmaker.markets?.length) {

        const outcomes = bookmaker.markets[0].outcomes;

        awayOdds = outcomes[0].price;
        homeOdds = outcomes[1].price;

        if (awayOdds > 0) awayOdds = "+" + awayOdds;
        if (homeOdds > 0) homeOdds = "+" + homeOdds;

      }

    }

    const gameObj = {

      home,
      away,

      homeLogo: teamLogos[home],
      awayLogo: teamLogos[away],

      homeScore: game.home_team_score ?? "-",
      awayScore: game.visitor_team_score ?? "-",

      homeOdds,
      awayOdds,

      gameTime: formatGameTime(game)

    };

    if (game.status === "In Progress") {
      liveGames.push(gameObj);
    } else {
      upcomingGames.push(gameObj);
    }

  });

  const gamesToRender =
    liveGames.length > 0 ? liveGames : upcomingGames;

  gamesToRender.forEach(createCard);

}

// ---------- card creator ----------

function createCard(game) {

  const card = document.createElement("div");

  card.className =
    "w-72 h-96 pl-5 py-1.5 rounded bg-black text-white overflow-hidden mx-10 my-3";

  card.innerHTML = `
    <div class="text-green-400 text-sm font-semibold mb-3">
      ${game.gameTime}
    </div>

    <div class="text-xl p-1">${game.home}</div>

    <div class="flex items-center place-content-between pr-12">
      <img src="${game.homeLogo}" width="40">
      <div class="text-yellow-500 pl-5 text-4xl">${game.homeScore}</div>
    </div>

    <div class="p-1 mb-2">Odds: ${game.homeOdds}</div>

    <h6 class="text-center bg-sky-500 mr-5">VS</h6>

    <div class="text-xl p-1">${game.away}</div>

    <div class="flex items-center place-content-between pr-12">
      <img src="${game.awayLogo}" width="40">
      <div class="text-yellow-500 pl-5 text-4xl">${game.awayScore}</div>
    </div>

    <div class="p-1">Odds: ${game.awayOdds}</div>
  `;

  cardList.appendChild(card);

}

// ---------- start ----------

loadGames();

// refresh every 30 seconds

setInterval(() => {
  location.reload();
}, 30000);