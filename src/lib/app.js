require('module-alias/register');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('~/routes/index');
const { sequelize } = require('~/models/index');

exports.start = async () => {
  const app = express();

  app.set('view engine', 'html');
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));
  app.use(routes);
  app.get('/*', (req, res) =>
    res.status(404).json({ success: false, message: "API Doesn't Exist" }),
  );
  await sequelize.sync();
  return app;
};