/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../database/config/config.js')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Synchronizing any model changes with database.

if (config.sync) {
  fs.readdirSync(__dirname)
    .filter(
      (file) => file.indexOf('.') !== 0
        && file !== basename
        && file.slice(-3) === '.js'
    )
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(
        sequelize,
        Sequelize.DataTypes
      );
      db[model.name] = model;
    });

  sequelize
    .sync({})
    .then(() => {
      // Insert initial required data
      Object.keys(db).forEach((modelName) => {
        db[modelName].associate ? db[modelName].associate(db) : false;
        db[modelName].seed ? db[modelName].seed(db) : false;
      });
      console.log('Database synchronized');
      return null;
    })
    .catch((error) => {
      if (error) {
        console.log('An error occured in synchronization: ');
        console.error(error);
      }
    });
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
