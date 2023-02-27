const Sequelize = require('sequelize');

const { postgres } = require('~/config/index');

const getTransactionModel = require('./transaction.model');

const sequelize = new Sequelize(
  postgres.db,
  postgres.username,
  postgres.password,
  postgres.options,
);

const models = {
  Transaction: getTransactionModel(sequelize, Sequelize),
};

module.exports = { sequelize, ...models };
