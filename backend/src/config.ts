import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 5000,
    env: 'PORT',
    arg: 'port',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      env: 'POSTGRES_HOST',
      default: '127.0.0.1',
    },
    database: {
      doc: 'Database name',
      format: String,
      env: 'POSTGRES_DATABASE',
      default: 'postgres',
    },
    user: {
      doc: 'Database username',
      env: 'POSTGRES_USERNAME',
      format: String,
      default: 'postgres',
    },
    port: {
      doc: 'Database Port',
      env: 'POSTGRES_PORT',
      format: Number,
      default: 5432,
    },
    password: {
      doc: 'Database password',
      format: String,
      env: 'POSTGRES_PASSWORD',
      default: 'password',
      sensitive: true,
    },
    debug: {
      doc: 'Enable Knex Debug',
      format: Boolean,
      env: 'KNEX_DEBUG',
      default: false,
    },
  },
});

export default config;
