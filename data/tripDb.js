const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db('tripTbl');
}

function findById(id) {
  return db('tripTbl').where({ id: Number(id) });
}

function insert(trip) {
  return db('tripTbl')
    .insert(trip)
    .then(ids => ({ id: ids[0] }));
}

function update(id, trip) {
  return db('tripTbl')
    .where('id', Number(id))
    .update(trip);
}

function remove(id) {
  return db('tripTbl')
    .where('id', Number(id))
    .del();
}
