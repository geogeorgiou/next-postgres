require('dotenv').config({ path: '.env.development' });

import type { Knex } from 'knex';

// Update with your config settings.

const config: Knex.Config = {
  client: 'pg',
  connection:
    process.env.POSTGRES_URL +
    (process.env.NODE_ENV === 'development' ? '' : '?sslmode=require'),
  migrations: {
    extension: 'ts',
  },
};

export default config;
