
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'wahtever', email: 'fakeemail@whatever.com', privacy: false, creation_date: '01-04-20'},
        {id: 2, user_name: 'dude', email: 'fakeemail1@whatever.com', privacy: false, creation_date: '01-03-20'},
        {id: 3, user_name: 'doesnt matter', email: 'fakeemail2@whatever.com', privacy: false, creation_date: '01-05-20'}
      ]);
    });
};
