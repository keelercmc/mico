const db = require('../data/db-config.js');

module.exports = {
  add,
  update,
  remove,
  findStories,
  findById
}


function findDecks (id){
  return db('decks')
    .where({user_id: id});
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db('users')
    .where({id})
    .first();
}

function addDeck(deckInfo){
  return db('decks')
    .insert(deckInfo);
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  }
  catch (error) {
    throw error;
  }
}

function update(changes, id){
  return db('users')
    .where({id})
    .update(changes);

}

function remove(id){
  return db('users')
  .delete()
  .where({id});
}
