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
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('cards', tbl => {
      tbl.increments('id');
      tbl.json('JSON_front')
        .notNullable();
      tbl.json('JSON_back')
        .notNullable();
      tbl.integer('deck_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('decks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cards')
    .dropTableIfExists('decks')
    .dropTableIfExists('users');
};
