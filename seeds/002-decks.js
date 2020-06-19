
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('decks').del()
    .then(function () {
      // Inserts seed entries
      return knex('decks').insert([
        {id: 1, name: 'deck1', length: 3, needs_review: false, user_id:1},
        {id: 2, name: 'deck2', length: 2, needs_review: false, user_id:3},
        {id: 3, name: 'deck3', length: 70, needs_review: false, user_id:2}
      ]);
    });
};
