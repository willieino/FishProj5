const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get: function(id) {
    let query = db('tripTbl as t');

    if (id) {
      query.where('t.id', id).first();

      const promises = [query, this.getTripCatches(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [trip, catches] = results;
        trip.catches = catches;

        return mappers.tripToBody(trip);
      });
    }

    return query.then(trips => {
      return trips.map(trip => mappers.projectToBody(trip));
    });
  },
  getTripCatches: function(tripId) {
    return db('catchTbl')
      .where('trip_id', tripId)
      .then(catches => catches.map(catchs => mappers.catchToBody(catchs)));
  },
  insert: function(trip) {
    return db('tripTbl')
      .insert(trip)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db('tripTbl')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('tripTbl')
      .where('id', id)
      .del();
  },
};
