const db = require("../database/connection.js");

module.exports = {
  find,
  findBy,
  findById,
};

function find() {
  return db("decks").select("id", "name").orderBy("id");
}

function findBy(filter) {
  return db("decks").where(filter).orderBy("id");
}

function findById(id) {
  return db("decks").where({ id }).first();
}

function addPhoto(photoData){
  return db('photos')
    .insert(photoData);
}

function update(changes, id){
  return db('decks')
    .where({id})
    .update(changes);
}

function remove(id){
  return db('decks')
  .delete()
  .where({id});
}
