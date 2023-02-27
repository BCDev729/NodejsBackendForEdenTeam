
/** @type {{[key: string]: { log?: boolean; name: string; defaultValue?: string; group?: string, type?: 'boolean' | 'string' | 'number' } }} */
module.exports = {
  /**
   * App
   */
  PORT: {
    name: 'Port',
    defaultValue: 3000,
  },
  HOST: {
    name: 'Host',
    defaultValue: '0.0.0.0',
  },
  API_EXCLUDES: {
    name: 'Enable API Excludes',
    defaultValue: true,
    type: 'boolean',
  },
  CORS_ENABLED: {
    name: 'Enabled',
    group: 'CORS',
    defaultValue: false,
    type: 'boolean',
  },
  CORS_ORIGIN: {
    name: 'Origin',
    log: false,
    group: 'CORS',
    defaultValue: '*',
  },
  PUBLIC_URL: {
    name: 'Public URL',
    defaultValue: `http://localhost:${process.env.PORT || 3000}`,
  },
  MORGAN_ENABLE: {
    name: 'Enable Morgan logging',
    defaultValue: false,
    type: 'boolean',
  },
  API_PREFIX: {
    name: 'API Prefix',
    log: false,
    defaultValue: '/api/v1',
  },
  /**
   * Postgres DB
   */
  POSTGRES_DB: {
    name: 'Database',
    group: 'Postgres',
    defaultValue: 'postgres',
  },
  POSTGRES_HOST: {
    name: 'Host',
    group: 'Postgres',
    defaultValue: '127.0.0.1',
  },
  POSTGRES_PORT: {
    name: 'Port',
    group: 'Postgres',
    defaultValue: 5432,
  },
  POSTGRES_USER: {
    name: 'Username',
    log: false,
    group: 'Postgres',
    defaultValue: 'postgres',
  },
  POSTGRES_PASSWORD: {
    name: 'Password',
    log: false,
    group: 'Postgres',
    defaultValue: 'postgres',
  },
  POSTGRES_LOGGING: {
    name: 'Logging',
    log: false,
    group: 'Postgres',
    defaultValue: false,
    type: 'boolean',
  },
  POSTGRES_POOL_MAX: {
    name: 'Pool Max',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 5,
  },
  POSTGRES_POOL_MIN: {
    name: 'Pool Min',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 0,
  },
  POSTGRES_POOL_ACQUIRE: {
    name: 'Pool Acquire',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 30000,
  },
  POSTGRES_POOL_IDLE: {
    name: 'Pool IDLE',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 10000,
  },
  POSTGRES_SSL: {
    name: 'SSL Required',
    log: false,
    group: 'Postgres',
    type: 'boolean',
    defaultValue: false,
  },
};
