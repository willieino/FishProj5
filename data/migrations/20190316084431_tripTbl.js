
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('tripTbl', (table) => {
        table.increments('id').primary();
        table.string(Trip).unique().notNullable();

        table
        .string('firstName', 128)
        .notNullable();
        table
        .string('lastName', 128)
        .notNullable();
        table
        .string('username', 128)
        .notNullable()
        .unique();
        table
        .string('email', 128)
        .notNullable()
        .unique();
        table
        .string('password', 128)
        .notNullable();
      }),
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('tripTbl')
    ]);
  };

  //Trip
  //StartDate
  //Duration
  //Place
  //Photos
  //Notes
  //Anglers
  //Gps1
  //Gps2
  //ImgCaption
  //complete
