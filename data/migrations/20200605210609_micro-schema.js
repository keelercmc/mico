exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('id');
      tbl.string('user_name')
        .notNullable();
      tbl.string('email')
        .notNullable();
      tbl.boolean('privacy');
      tbl.string('creation_date')
        .notNullable();

    })
    .createTable('decks', tbl => {
      tbl.increments('id');
      tbl.string('name')
        .notNullable();
      tbl.integer('length');
      tbl.boolean('needs_review')
        .defaultTo(false)
        .notNullable();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id');
    })
    .createTable('cards', tbl => {
      tbl.increments('id');
      tbl.string('JSON_front')
        .notNullable();
      tbl.string('JSON_back');
      tbl.integer('deck_id')
        .unsigned()
        .notNullable()
        .references('deck.id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cards')
    .dropTableIfExists('decks')
    .dropTableIfExists('users');
};
