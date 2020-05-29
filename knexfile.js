module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.db3'
    }, 

    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); 
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds'}
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    }, 

    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds'}
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.db3'
    }, 

    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds'}
  }

};
