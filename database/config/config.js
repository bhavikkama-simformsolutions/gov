require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOST,
    dialect: 'postgres',
    operatorsAliases: '0',
    logging: false,
    sync: true,
  },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: '0',
  },
  production: {
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    host: process.env.PROD_DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: '0',
  },
  staging: {
    username: process.env.STAGING_USERNAME,
    password: process.env.STAGING_PASSWORD,
    database: process.env.STAGING_DATABASE,
    host: process.env.STAGING_DB_URL,
    dialect: 'postgres',
    operatorsAliases: '0',
    sync: true,
  },
};
