const NBA = require("nba");
const curry = NBA.teamIdFromName("New Orleans Pelicans")
console.log(curry)
/* logs the following:
{
  firstName: 'Stephen',
  lastName: 'Curry',
  playerId: 201939,
  teamId: 1610612744,
  fullName: 'Stephen Curry',
  downcaseName: 'stephen curry'
}
*/
NBA.stats.teamStats({TEAMID:curry}).then(console.log)

// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);