exports.up = function (knex, Promise) {
    return Promise.all([
      knex.schema.createTable('favorites', (favorites) => {
        favorites.increments();
        favorites.string('symbol', 128).notNullable();
        favorites
          .string('usersUid')
          .unsigned()
          .references('users.uid');
      })
    ])
  };
  
  
  exports.down = function (knex, Promise) {
    return Promise.all([
      knex.schema.dropTableIfExists('favorites')
    ]);
  };
  
  