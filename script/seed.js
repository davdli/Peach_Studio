"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const products = await Promise.all([
    Product.create({
      name: "peachyChair",
      imageUrl: "chair.png",
      description: "Its a cute lil chair!",
      price: 800,
      inventory: 100,
      category: "chair",
    }),
    Product.create({
      name: "peachySofa",
      imageUrl: "sofa.png",
      description: "Its a cute lil sofa!",
      price: 2200,
      inventory: 5,
      category: "sofa",
    }),
    Product.create({
      name: "peachyTable",
      imageUrl: "table.png",
      description: "Its a cute lil table!",
      price: 1300,
      inventory: 11,
      category: "table",
    }),
    Product.create({
      name: "peachyDresser",
      imageUrl: "dresser.png",
      description: "Its a cute lil dresser!",
      price: 2400,
      inventory: 22,
      category: "dresser",
    }),
  ]);

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      firstName: "Cody",
      lastName: "Jones",
      address: "100 Fake Street",
    }),
    User.create({ username: "murphy", password: "123" }),
  ]);
}
/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
