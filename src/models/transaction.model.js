/**
 * Get the model
 * @param {import("sequelize").Sequelize} sequelize sequelize instance
 * @param {{ DataTypes: import("sequelize").DataTypes }} options sequelize options
 * @returns {import("sequelize").Model}
 */
const getTransactionModel = (sequelize, { DataTypes }) => {
  const Transaction = sequelize.define(
    'transactions',
    {
      asset_id: {
        type: DataTypes.INTEGER,
      },
      seller_id: {
        type: DataTypes.INTEGER,
      },
      buyer_id: { type: DataTypes.INTEGER },
      price_share : {type : DataTypes.INTEGER},
      number_share: { type: DataTypes.INTEGER },
      timestamp: { type: DataTypes.STRING },
    },
  );

  return Transaction;
};

module.exports = getTransactionModel;
