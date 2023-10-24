module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'localhost', // process.env.DB_HOST || 
    dialect: 'postgres',
  },
};
