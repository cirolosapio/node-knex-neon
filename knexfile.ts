import type { Knex } from 'knex';
require('dotenv').config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.NUXT_PG_HOST,
      database: process.env.NUXT_PG_DATABASE,
      user: process.env.NUXT_PG_USER,
      password: process.env.NUXT_PG_PASSWORD,
      ssl: true,
    },
  },
};

module.exports = config;
