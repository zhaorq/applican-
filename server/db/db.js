const Sequelize = require('sequelize');
const config = require('./config.js');
require('dotenv').config();

const options = process.env.databaseOptions || config.databaseOptions;

const db = new Sequelize('postgresHippo', 'henryhan88', process.env.AWS_PWD, options);

db.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;
