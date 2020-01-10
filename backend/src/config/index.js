const dotenv = require('dotenv');

dotenv.config();

exports.config = {
  app: {
    port: process.env.SERVER_PORT || 3089,
    ip: process.env.SERVER_IP || 'localhost',
    apiBase: '/lms/api',
    domain: `${process.env.SERVER_IP || 'localhost'}:${process.env
      .SERVER_PORT || 3089}`
  },
  database: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      user: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '123',
      database: process.env.DATABASE_NAME || 'lms',
      decimalNumbers: false,
      dateStrings: true
    },

    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true
  },

  cors: {
    origin: 'http://localhost:3000'
  }
};
