
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('decks').del()
    .then(function () {
      // Inserts seed entries
      return knex('decks').insert([
        {id: 1, name: 'bill', length: 3, needs_review: false, user_id:1},
        {id: 2, name: 'bob', length: 2, needs_review: false, user_id:3},
        {id: 3, name: 'betty', length: 70, needs_review: false, user_id:2}
      ]);
    });
};
