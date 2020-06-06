const db = require("../database/connection.js");

module.exports = {
  find,
  findBy,
  findById,
};

function find() {
  return db("cards").select("*").orderBy("deck_id");
}

function findBy(filter) {
  return db("cards").where(filter).orderBy("id");
}

function findById(id) {
  return db("cards").where({ id }).first();
}
