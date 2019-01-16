const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
 
 
  get: function(id) {
    let query = db('catchTbl');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(catchs => mappers.catchToBody(catchs));
    }

    return query.then(catches => {
      return catches.map(catchs => mappers.catchToBody(catchs));
    });
  },
  insert: function(catchs) {
    return db('catchTbl')
      .insert(catchs)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db('catchTbl')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('catchTbl')
      .where('id', id)
      .del();
  },
};
