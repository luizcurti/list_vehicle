interface IConfig {
  database: {
    type: string;
    port: string;
    host: string;
    username: string;
    password: string;
    names: {
      db: string;
    }
  };
}

const config = {
  database: {
    type: 'postgres',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    names: {
      db: process.env.DB_DATABASE,
    },
  },
} as IConfig;

export default config;
