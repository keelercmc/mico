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
