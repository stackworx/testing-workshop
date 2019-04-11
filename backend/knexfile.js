const {knexSnakeCaseMappers} = require('objection');

const {connection} = require('./src/db');

module.exports = {
  development: {
    debug: false,
    client: 'postgres',
    connection,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/seeds/dev',
    },
    migrations: {
      directory: './src/migrations',
    },
    ...knexSnakeCaseMappers(),
  },

  production: {
    client: 'postgres',
    connection,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/seeds/prod',
    },
    migrations: {
      directory: './src/migrations',
    },
    ...knexSnakeCaseMappers(),
  },
};
