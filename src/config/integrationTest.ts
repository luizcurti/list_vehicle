interface IConfig {
  database: {
    type: string;
    database: string;
  };
}

const config = {
  database: {
    type: 'sqlite',
    database: './db.integration.sqlite',
  },
} as IConfig;

export default config;