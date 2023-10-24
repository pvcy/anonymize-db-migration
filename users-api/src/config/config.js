require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
};
