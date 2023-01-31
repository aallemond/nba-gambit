// Live Game Attributes API Get Function
const gameData = {};

   /* const apiNba = {
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
            //console.log(gameData);
            //debugger;
            Promise.all([a,b]).then(() => displayInfo(gameData)); 
*/
        displayInfo();
        function displayInfo(gameData){
            


            gameData = JSON.parse('{"Dallas Mavericks__Detroit Pistons":{"liveSportsOdds":{"id":"02ce5b05a087563335760870ff2e6573","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-01-31T01:40:00Z","home_team":"Dallas Mavericks","away_team":"Detroit Pistons","bookmakers":[{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Dallas Mavericks","price":-950},{"name":"Detroit Pistons","price":540}]}]},{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Dallas Mavericks","price":-690},{"name":"Detroit Pistons","price":470}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Dallas Mavericks","price":-1115},{"name":"Detroit Pistons","price":650}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Dallas Mavericks","price":-1115},{"name":"Detroit Pistons","price":650}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Dallas Mavericks","price":-2000},{"name":"Detroit Pistons","price":900}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Dallas Mavericks","price":-2500},{"name":"Detroit Pistons","price":1000}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Dallas Mavericks","price":-1100},{"name":"Detroit Pistons","price":600}]}]},{"key":"mybookieag","title":"MyBookie.ag","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Dallas Mavericks","price":-1000},{"name":"Detroit Pistons","price":550}]}]},{"key":"williamhill_us","title":"William Hill (US)","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Dallas Mavericks","price":-1100},{"name":"Detroit Pistons","price":650}]}]},{"key":"foxbet","title":"FOX Bet","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Dallas Mavericks","price":-1000},{"name":"Detroit Pistons","price":475}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Dallas Mavericks","price":-800},{"name":"Detroit Pistons","price":500}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-01-31T03:49:17Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:17Z","outcomes":[{"name":"Dallas Mavericks","price":-800},{"name":"Detroit Pistons","price":475}]}]},{"key":"circasports","title":"Circa Sports","last_update":"2023-01-31T03:45:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:45:23Z","outcomes":[{"name":"Dallas Mavericks","price":-1000},{"name":"Detroit Pistons","price":627}]}]}]},"apiNba":{"id":11810,"league":"standard","season":2022,"date":{"start":"2023-01-31T01:30:00.000Z","end":null,"duration":null},"stage":2,"status":{"clock":"2:38","halftime":false,"short":2,"long":"In Play"},"periods":{"current":4,"total":4,"endOfPeriod":false},"arena":{"name":null,"city":null,"state":null,"country":null},"teams":{"visitors":{"id":10,"name":"Detroit Pistons","nickname":"Pistons","code":"DET","logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Detroit_Pistons_primary_logo_2017.png/150px-Detroit_Pistons_primary_logo_2017.png"},"home":{"id":8,"name":"Dallas Mavericks","nickname":"Mavericks","code":"DAL","logo":"https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png"}},"scores":{"visitors":{"win":0,"loss":0,"series":{"win":0,"loss":0},"linescore":["27","30","27","16"],"points":100},"home":{"win":0,"loss":0,"series":{"win":0,"loss":0},"linescore":["30","23","30","20"],"points":103}},"officials":[],"timesTied":null,"leadChanges":null,"nugget":null}},"Phoenix Suns__Toronto Raptors":{"liveSportsOdds":{"id":"a39eddcf93e3a12e69e4836f95beaadc","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-01-31T02:10:00Z","home_team":"Phoenix Suns","away_team":"Toronto Raptors","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Phoenix Suns","price":-160},{"name":"Toronto Raptors","price":130}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Phoenix Suns","price":-125},{"name":"Toronto Raptors","price":-102}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Phoenix Suns","price":-175},{"name":"Toronto Raptors","price":138}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Phoenix Suns","price":-175},{"name":"Toronto Raptors","price":138}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Phoenix Suns","price":-175},{"name":"Toronto Raptors","price":138}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Phoenix Suns","price":-127},{"name":"Toronto Raptors","price":102}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Phoenix Suns","price":-110},{"name":"Toronto Raptors","price":-120}]}]},{"key":"circasports","title":"Circa Sports","last_update":"2023-01-31T03:45:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:45:23Z","outcomes":[{"name":"Phoenix Suns","price":-102},{"name":"Toronto Raptors","price":-120}]}]},{"key":"mybookieag","title":"MyBookie.ag","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Phoenix Suns","price":110},{"name":"Toronto Raptors","price":-142}]}]},{"key":"williamhill_us","title":"William Hill (US)","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Phoenix Suns","price":-140},{"name":"Toronto Raptors","price":110}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-01-31T03:49:17Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:17Z","outcomes":[{"name":"Phoenix Suns","price":-115},{"name":"Toronto Raptors","price":-115}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Phoenix Suns","price":-140},{"name":"Toronto Raptors","price":115}]}]},{"key":"foxbet","title":"FOX Bet","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Phoenix Suns","price":105},{"name":"Toronto Raptors","price":-143}]}]}]},"apiNba":{"id":11811,"league":"standard","season":2022,"date":{"start":"2023-01-31T02:00:00.000Z","end":null,"duration":null},"stage":2,"status":{"clock":"10:27","halftime":false,"short":2,"long":"In Play"},"periods":{"current":4,"total":4,"endOfPeriod":false},"arena":{"name":null,"city":null,"state":null,"country":null},"teams":{"visitors":{"id":38,"name":"Toronto Raptors","nickname":"Raptors","code":"TOR","logo":"https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png"},"home":{"id":28,"name":"Phoenix Suns","nickname":"Suns","code":"PHX","logo":"https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png"}},"scores":{"visitors":{"win":0,"loss":0,"series":{"win":0,"loss":0},"linescore":["28","25","31","0"],"points":84},"home":{"win":0,"loss":0,"series":{"win":0,"loss":0},"linescore":["31","31","20","2"],"points":84}},"officials":[],"timesTied":null,"leadChanges":null,"nugget":null}},"Portland Trail Blazers__Atlanta Hawks":{"liveSportsOdds":{"id":"74399be6faaf5591b7abe90e7dd1a60c","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-01-31T03:10:00Z","home_team":"Portland Trail Blazers","away_team":"Atlanta Hawks","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Atlanta Hawks","price":255},{"name":"Portland Trail Blazers","price":-325}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Atlanta Hawks","price":230},{"name":"Portland Trail Blazers","price":-310}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Atlanta Hawks","price":225},{"name":"Portland Trail Blazers","price":-295}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Atlanta Hawks","price":225},{"name":"Portland Trail Blazers","price":-295}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Atlanta Hawks","price":225},{"name":"Portland Trail Blazers","price":-295}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Atlanta Hawks","price":225},{"name":"Portland Trail Blazers","price":-295}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Atlanta Hawks","price":210},{"name":"Portland Trail Blazers","price":-300}]}]},{"key":"mybookieag","title":"MyBookie.ag","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Atlanta Hawks","price":255},{"name":"Portland Trail Blazers","price":-333}]}]},{"key":"williamhill_us","title":"William Hill (US)","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Atlanta Hawks","price":250},{"name":"Portland Trail Blazers","price":-320}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Atlanta Hawks","price":250},{"name":"Portland Trail Blazers","price":-350}]}]},{"key":"foxbet","title":"FOX Bet","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Atlanta Hawks","price":260},{"name":"Portland Trail Blazers","price":-400}]}]},{"key":"bovada","title":"Bovada","last_update":"2023-01-31T03:49:17Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:17Z","outcomes":[{"name":"Atlanta Hawks","price":275},{"name":"Portland Trail Blazers","price":-400}]}]},{"key":"circasports","title":"Circa Sports","last_update":"2023-01-31T03:49:17Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:17Z","outcomes":[{"name":"Atlanta Hawks","price":253},{"name":"Portland Trail Blazers","price":-323}]}]}]},"apiNba":{"id":11812,"league":"standard","season":2022,"date":{"start":"2023-01-31T03:00:00.000Z","end":null,"duration":null},"stage":2,"status":{"clock":"6:01","halftime":false,"short":2,"long":"In Play"},"periods":{"current":2,"total":4,"endOfPeriod":false},"arena":{"name":null,"city":null,"state":null,"country":null},"teams":{"visitors":{"id":1,"name":"Atlanta Hawks","nickname":"Hawks","code":"ATL","logo":"https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png"},"home":{"id":29,"name":"Portland Trail Blazers","nickname":"Trail Blazers","code":"POR","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png"}},"scores":{"visitors":{"win":0,"loss":0,"series":{"win":0,"loss":0},"linescore":["23","19","",""],"points":42},"home":{"win":0,"loss":0,"series":{"win":0,"loss":0},"linescore":["31","16","",""],"points":47}},"officials":[],"timesTied":null,"leadChanges":null,"nugget":null}},"Cleveland Cavaliers__Miami Heat":{"liveSportsOdds":{"id":"4f88be957c08fec11f1a32985c4e0ca4","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-02-01T00:10:00Z","home_team":"Cleveland Cavaliers","away_team":"Miami Heat","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Cleveland Cavaliers","price":-200},{"name":"Miami Heat","price":170}]}]},{"key":"betus","title":"BetUS","last_update":"2023-01-31T03:48:27Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:27Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":172}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":172}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Cleveland Cavaliers","price":-200},{"name":"Miami Heat","price":165}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Cleveland Cavaliers","price":-210},{"name":"Miami Heat","price":170}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":165}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":165}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":165}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":165}]}]},{"key":"betrivers","title":"BetRivers","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Cleveland Cavaliers","price":-205},{"name":"Miami Heat","price":165}]}]}]}},"New York Knicks__Los Angeles Lakers":{"liveSportsOdds":{"id":"a70f575122f8fb1a62f25c64fafb4905","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-02-01T00:40:00Z","home_team":"New York Knicks","away_team":"Los Angeles Lakers","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Los Angeles Lakers","price":110},{"name":"New York Knicks","price":-130}]}]},{"key":"betus","title":"BetUS","last_update":"2023-01-31T03:48:27Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:27Z","outcomes":[{"name":"Los Angeles Lakers","price":115},{"name":"New York Knicks","price":-135}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Los Angeles Lakers","price":115},{"name":"New York Knicks","price":-140}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Los Angeles Lakers","price":118},{"name":"New York Knicks","price":-138}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Los Angeles Lakers","price":110},{"name":"New York Knicks","price":-130}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Los Angeles Lakers","price":112},{"name":"New York Knicks","price":-136}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Los Angeles Lakers","price":112},{"name":"New York Knicks","price":-136}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Los Angeles Lakers","price":112},{"name":"New York Knicks","price":-136}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Los Angeles Lakers","price":112},{"name":"New York Knicks","price":-136}]}]},{"key":"betrivers","title":"BetRivers","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Los Angeles Lakers","price":112},{"name":"New York Knicks","price":-136}]}]}]}},"Milwaukee Bucks__Charlotte Hornets":{"liveSportsOdds":{"id":"8f0c027915c7b16d69204515dfea2409","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-02-01T01:10:00Z","home_team":"Milwaukee Bucks","away_team":"Charlotte Hornets","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Charlotte Hornets","price":550},{"name":"Milwaukee Bucks","price":-750}]}]},{"key":"williamhill_us","title":"William Hill (US)","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Charlotte Hornets","price":550},{"name":"Milwaukee Bucks","price":-800}]}]},{"key":"betus","title":"BetUS","last_update":"2023-01-31T03:48:27Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:27Z","outcomes":[{"name":"Charlotte Hornets","price":490},{"name":"Milwaukee Bucks","price":-700}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Charlotte Hornets","price":525},{"name":"Milwaukee Bucks","price":-750}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Charlotte Hornets","price":540},{"name":"Milwaukee Bucks","price":-770}]}]},{"key":"mybookieag","title":"MyBookie.ag","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Charlotte Hornets","price":539},{"name":"Milwaukee Bucks","price":-833}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Charlotte Hornets","price":500},{"name":"Milwaukee Bucks","price":-750}]}]},{"key":"superbook","title":"SuperBook","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Charlotte Hornets","price":500},{"name":"Milwaukee Bucks","price":-700}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Charlotte Hornets","price":440},{"name":"Milwaukee Bucks","price":-590}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Charlotte Hornets","price":440},{"name":"Milwaukee Bucks","price":-590}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Charlotte Hornets","price":440},{"name":"Milwaukee Bucks","price":-590}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Charlotte Hornets","price":440},{"name":"Milwaukee Bucks","price":-590}]}]},{"key":"betrivers","title":"BetRivers","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Charlotte Hornets","price":440},{"name":"Milwaukee Bucks","price":-590}]}]}]}},"Chicago Bulls__Los Angeles Clippers":{"liveSportsOdds":{"id":"95e26cd93c6b15d394a9c6c8d6a3317b","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-02-01T01:10:00Z","home_team":"Chicago Bulls","away_team":"Los Angeles Clippers","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Chicago Bulls","price":130},{"name":"Los Angeles Clippers","price":-150}]}]},{"key":"betus","title":"BetUS","last_update":"2023-01-31T03:48:27Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:27Z","outcomes":[{"name":"Chicago Bulls","price":145},{"name":"Los Angeles Clippers","price":-165}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Chicago Bulls","price":135},{"name":"Los Angeles Clippers","price":-160}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Chicago Bulls","price":134},{"name":"Los Angeles Clippers","price":-158}]}]},{"key":"pointsbetus","title":"PointsBet (US)","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Chicago Bulls","price":130},{"name":"Los Angeles Clippers","price":-150}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Chicago Bulls","price":132},{"name":"Los Angeles Clippers","price":-162}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Chicago Bulls","price":132},{"name":"Los Angeles Clippers","price":-162}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Chicago Bulls","price":132},{"name":"Los Angeles Clippers","price":-162}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Chicago Bulls","price":132},{"name":"Los Angeles Clippers","price":-162}]}]},{"key":"betrivers","title":"BetRivers","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Chicago Bulls","price":132},{"name":"Los Angeles Clippers","price":-162}]}]}]}},"Denver Nuggets__New Orleans Pelicans":{"liveSportsOdds":{"id":"d896b1bd1af559015b8520f6e865355d","sport_key":"basketball_nba","sport_title":"NBA","commence_time":"2023-02-01T03:10:00Z","home_team":"Denver Nuggets","away_team":"New Orleans Pelicans","bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Denver Nuggets","price":-315},{"name":"New Orleans Pelicans","price":260}]}]},{"key":"betmgm","title":"BetMGM","last_update":"2023-01-31T03:48:31Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:48:31Z","outcomes":[{"name":"Denver Nuggets","price":-350},{"name":"New Orleans Pelicans","price":260}]}]},{"key":"fanduel","title":"FanDuel","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Denver Nuggets","price":-340},{"name":"New Orleans Pelicans","price":275}]}]},{"key":"mybookieag","title":"MyBookie.ag","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Denver Nuggets","price":-416},{"name":"New Orleans Pelicans","price":306}]}]},{"key":"barstool","title":"Barstool Sportsbook","last_update":"2023-01-31T03:49:24Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:24Z","outcomes":[{"name":"Denver Nuggets","price":-360},{"name":"New Orleans Pelicans","price":280}]}]},{"key":"twinspires","title":"TwinSpires","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Denver Nuggets","price":-360},{"name":"New Orleans Pelicans","price":280}]}]},{"key":"unibet_us","title":"Unibet","last_update":"2023-01-31T03:49:08Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:08Z","outcomes":[{"name":"Denver Nuggets","price":-360},{"name":"New Orleans Pelicans","price":280}]}]},{"key":"sugarhouse","title":"SugarHouse","last_update":"2023-01-31T03:49:23Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:23Z","outcomes":[{"name":"Denver Nuggets","price":-360},{"name":"New Orleans Pelicans","price":280}]}]},{"key":"betrivers","title":"BetRivers","last_update":"2023-01-31T03:49:15Z","markets":[{"key":"h2h","last_update":"2023-01-31T03:49:15Z","outcomes":[{"name":"Denver Nuggets","price":-360},{"name":"New Orleans Pelicans","price":280}]}]}]}}}')
            
            //debugger;
            console.log(gameData);
            const scoreDisplayAway = document.querySelectorAll(".visitor")
            const scoreDisplayHome = document.querySelectorAll(".home")
            const logoDisplayHome = document.querySelectorAll(".homelogo")
            const logoDisplayAway = document.querySelectorAll(".awaylogo")
            const teamNameDisplayHome = document.querySelectorAll(".teamname-home")
            const teamNameDisplayAway = document.querySelectorAll(".teamname-away")
            const awayTeamOdds = document.querySelectorAll(".away-odds")
            const homeTeamOdds = document.querySelectorAll(".home-odds")
            const timeInGame = document.querySelectorAll(".game-time")
            let i = 0;
            for (const key in gameData) {
                
                const game = gameData[key];
                console.log(game);
                
                const teamNameHome = game.apiNba.teams.home.name
                const teamNameAway = game.apiNba.teams.visitors.name
                const pointsHome = game.apiNba.scores.home.points
                const pointsAway = game.apiNba.scores.visitors.points
                const homeLogo = game.apiNba.teams.home.logo
                const awayLogo = game.apiNba.teams.visitors.logo
                

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

                const awayOdds = game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[awayNameKey].price;
                const homeOdds = game.liveSportsOdds.bookmakers[draftKingsKey].markets[0].outcomes[homeNameKey].price;

                
                const timeLeftInQ = game.apiNba.status.clock;
                const quarter = game.apiNba.periods.current;
                var gameTime
                if(game.apiNba.status.halfTime == true)
                {
                    gameTime = 'Halftime'
                }

                else if(quarter == 1)
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
                teamNameDisplayHome[i].innerHTML = ""
                teamNameDisplayAway[i].innerHTML = ""
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
                awayTeamOdds[i].append(awayOdds)
                homeTeamOdds[i].append(homeOdds)
                timeInGame[i].append(gameTime)
                i++;
            }
            
                
                    /*
                    const teamNameHome = data.apiNba.teams.home.name
                    const teamNameAway = data.apiNba.teams.visitors.name
                    const pointsHome = data.apiNba.scores.home.points
                    const pointsAway = data.apiNba.scores.visitors.points
                    const homeLogo = data.apiNba.teams.home.logo
                    const awayLogo = data.apiNba.teams.visitors.logo
                    
                 
                
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
                    */
        }

            
        

       
        /*
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
//pullOddsForGames()
//upcomingGamePull()
//liveGamePull()*/