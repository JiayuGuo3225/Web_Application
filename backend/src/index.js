'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }){
    const extensionService = strapi.plugin('graphql').service('extension');
    extensionService.shadowCRUD('api::bet.bet').disableMutations();
    extensionService.shadowCRUD('api::available-bet.available-bet').disableMutations();
    extensionService.shadowCRUD('api::user1.user1').field('bet_points').disable();
    extensionService.shadowCRUD('api::user1.user1').disableQueries();
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
