import '@config/env';
import config from '@config/index';

const { type, port, host, username, password, names } = config.database;
const { db } = names;

export default [
  {
    name: db,
    type,
    host,
    port,
    username,
    password,
    database: db,
    migrations: ['src/shared/infra/database/migrations/*.ts'],
    entities: ['src/modules/**/entities/*.ts'],
    cli: {
      migrationsDir: 'src/shared/infra/database/migrations',
    },
  },
];
