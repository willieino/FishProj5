// Update with your config settings.
require('dotenv').config('/.env');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/fish.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

 /*  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  } */

production: {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './data/seeds'
  }
},

};

