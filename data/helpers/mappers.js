module.exports = {
  intToBoolean,
  booleanToint,
  tripToBody,
  catchToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function tripToBody(trip) {
  const result = {
    ...trip,
    completed: intToBoolean(trip.completed),
  };

  if (trip.catches) {
    result.catches = trip.catches.map(catchs => ({
      ...catchs,
      completed: intToBoolean(catchs.completed),
    }));
  }

  return result;
}

function catchToBody(catchs) {
  return {
    ...catchs,
    completed: intToBoolean(catchs.completed),
  };
}
