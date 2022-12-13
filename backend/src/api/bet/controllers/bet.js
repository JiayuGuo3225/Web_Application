'use strict';

/**
 * bet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bet.bet', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async createBet(ctx) {
        // console.log(ctx.request.body);
        const body = JSON.parse(ctx.request.body)
        console.log(body);
        // { mID: betting.mID, price: price, chosen: form.team.value, user_1: user.id, points: form.points.value, commence_time: betting.commence_time }

        if (body.commence_time > new Date()){console.log("time"); return}
        const user = await strapi.entityService.findOne('api::user1.user1', body.user_1)

        if (user.bet_points < body.points) {
            ctx.body = { result: "Not enough points!" }
        }
        else {
            const points_after = user.bet_points - body.points;
            strapi.entityService.update('api::user1.user1', body.user_1, {
                data: {
                    bet_points: points_after
                }
            });

            strapi.entityService.create('api::bet.bet', {
                data: body,
            });

            ctx.body = { result: "Success!", points_after: points_after }
        }


       
    },


}));
