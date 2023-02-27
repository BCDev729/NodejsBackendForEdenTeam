const transactionCtrls = require('~/controllers/transaction.controllers');

/**
 * @type { Routes.default }
 */
module.exports = {
  prefix: '/transaction',
  routes: [{
    path: '/getPrice',
    methods: {
      post: {
        middlewares: [
          transactionCtrls.getPrice,   
        ],
      },
    },
  }],
};
