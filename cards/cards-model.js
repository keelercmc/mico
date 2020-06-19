const db = require("../database/connection.js");

module.exports = {
  findBy,
  findById,
  update,
  remove
};

function findBy(filter) {
  return db("cards").where(filter).orderBy("id");
}

function findById(id) {
  return db("photos").where({ id }).first();
}

function update(changes, id){
  return db('photos')
    .where({id})
    .update(changes);

}


function remove(id){
  return db('photos')
  .delete()
  .where({id});
}
