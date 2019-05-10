//const faker = require("faker");

// Faker function to create a fake user based on schema in migration file

/* const createFakeUser = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  uid: faker.internet.password(),
  receiveEmails: faker.random.boolean(),
  receiveTexts: faker.random.boolean(),
  phoneNumber: faker.phone.phoneNumberFormat(0)
}); */

// Deletes the existing users seeds, then runs the for loop that runs createFakeUser function to seed database with 500 dummy users

/* exports.seed = function(knex, Promise) {
  const desiredFakeUsers = 100;
  return knex("users")
    .del()
    .truncate()
    .then(async function() {
      for (let i = 0; i < 5; i++) {
        for (let i = 0; i < desiredFakeUsers; i++) {
          const fakeUsers = [];
          fakeUsers.push(createFakeUser());
          await knex("users").insert(fakeUsers);
        }
      }
    });
}; */


// merchants_products.js

const usersData = require('../../../data/users');
const favoritesData = require('../../../data/favorites');

exports.seed = function(knex, Promise) {
  return knex('favorites').del()
  .then(() => {
    return knex('users').del();
  })
  .then(() => {
    return knex('users').insert(usersData);
  })
  .then(() => {
    let favoritePromises = [];
    favoritesData.forEach((favorite) => {
      let user = favorite.uid;
      favoritePromises.push(createFavorite(knex, favorite, user));
    });

    return Promise.all(favoritePromises);
  });
};

const createFavorite = (knex, favorite, user) => {
  return knex('users').where('uid', user).first()
  .then((userRecord) => {
    return knex('favorites').insert({
      symbol: favorite.symbol,
      usersUid: userRecord.uid
    });
  });
};