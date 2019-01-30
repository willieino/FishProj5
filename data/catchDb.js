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
  return db('catchTbl');
}

function findById(id) {
  return db('catchTbl').where({ id: Number(id) });
}

function insert(trip) {
  return db('catchTbl')
    .insert(trip)
    .then(ids => ({ id: ids[0] }));
}

function update(id, trip) {
  return db('catchTbl')
    .where('id', Number(id))
    .update(trip);
}

function remove(id) {
  return db('catchTbl')
    .where('id', Number(id))
    .del();
}
