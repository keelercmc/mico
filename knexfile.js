

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    pool:{
      afterCreate: (conn,done) =>{
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    connection: {
      filename: './data/mico.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

};
