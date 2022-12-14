
const axios = require('axios');
module.exports = {

    '0 1 0 * * *': ({ strapi }) => {
        console.log("payback running");
        var config = {
            method: 'get',
            url: 'https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=8862712d95dfef87c7cc649bb3217c35',
        };

        axios(config)
            .then(function (response) {
                const matches = response.data
                // console.log(matches);
                strapi.entityService.findMany('api::bet.bet', {
                    filters: { payback: { $eq: null } },
                    populate: '*',
                }).then(bet => {

                    bet.forEach(bet => {
                       
                        //find corresponding match
                        const match = matches.find(match => {
                            // console.log(match.id,bet.mid);
                            return match.id === bet.mID
                        })
                        console.log("bet",bet,"match",match);
                        
                        if (!match?.completed) return
                        const winner = match.scores[0].score > match.scores[1].score ? "home" : "away"
                        const betWin = bet.chosen === winner
                        if (betWin) {

                            strapi.entityService.update('api::bet.bet', bet.id, {
                                data: {
                                    payback: bet.points * bet.price,
                                },
                            });

                            strapi.entityService.update('api::user1.user1', bet.user_1.id, {
                                data: {
                                    bet_points: bet.user_1.bet_points + bet.points * bet.price,
                                },
                            });


                        } else {
                            strapi.entityService.update('api::bet.bet', bet.id, {
                                data: {
                                    payback: 0,
                                },
                            });
                        }
                    })
                }, console.log)
            },console.log)

    },



    
    '0 0 0 * * *': ({ strapi }) => {
        console.log("cron running");

        var config = {
            method: 'get',
            url: 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds?markets=h2h&regions=us&apiKey=8862712d95dfef87c7cc649bb3217c35',
        };

        axios(config)
            .then(function (response) {
                const list =response.data
                // console.log(list);
                Promise.all(list.map(item => {
                    strapi.entityService.create('api::available-bet.available-bet', {
                        data: {
                            mID:item.id,
                            home_team: item.home_team,
                            away_team: item.away_team,
                            home_odds: item.bookmakers[0].markets[0].outcomes[1].price,
                            away_odds: item.bookmakers[0].markets[0].outcomes[0].price,
                            commence_time: item.commence_time
                        },
                    }).then(console.log, console.log)
                }
                ))
            },console.log)

    },
};
// strapi.db.query('api::available-bet.available-bet').deleteMany({}).then(console.log)

