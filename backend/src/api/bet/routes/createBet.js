module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/create-bet',
      handler: 'bet.createBet',
    },
  ],
};