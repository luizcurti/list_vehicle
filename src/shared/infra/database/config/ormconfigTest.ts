import '@config/env';
import config from '@config/integrationTest';

const { type, database } = config.database;

export default [
  {
    type: type,
    database: database,
    synchronize: true,
    logging: true,
    migrations: ['src/shared/infra/database/migrations/*.ts'],
    entities: ['src/modules/**/entities/*.ts'],
    cli: {
      migrationsDir: 'src/shared/infra/database/migrations',
    },
  },
];