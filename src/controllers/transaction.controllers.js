const { sendError } = require('~/utils/utils');
const log = require('debug')('app:controllers:transaction');
const { Transaction } = require('~/models/index');
const { Op } = require('sequelize');
/**
 * 
 * @param {import('express').Request} req The request
 * @param {import('express').Response} res The response
 * @param {Function} next Go to the next middleware
 */
exports.getPrice = async function (req, res) {
  const { date } = req.body;
  try {
    const date_s_format = new Date(date).getTime()/1000;
    const date_e_format = Number(date_s_format) + 86400;
    const data = await Transaction.findAll({
      where: {
        timestamp: {
          [Op.between]: [date_s_format.toString(), date_e_format.toString()],
        },
      },
    });
    let sum_prices = 0;
    for(let i = 0; i < data.length; i+=1) {
      sum_prices += data[i].price_share*data[i].number_share; 
    }
    const average_price = sum_prices / data.length;
    return res.json({ success: true, average_price });
  } catch (e) {
    log('Error while getting the average price', e);
    return sendError(req, res, 400, 'Failed to get the average price');
  }
};