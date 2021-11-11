'use strict'

const { db, models: { User } } = require('../server/db');
const faker = require('faker');
const Product = require('../server/db/models/Product');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
function randomCategory(max) {
  return Math.floor(Math.random() * max) + 1;
}
const values = ["chair", "sofa", "table", "dresser"];
let randomCate= values[randomCategory(3)];

// Products Dummy data
const dummyProducts = [
  {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.imageUrl(),
    price: faker.commerce.price(),
    inventory: faker.datatype.number(),
    category: randomCate,
  }
]

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ email: 'cody@fsa.com', password: '123' }),
    User.create({ email: 'murphy@fsa.com', password: '123' }),
  ]);

  // Creating Products
  let products = await Promise.all(dummyProducts.map(prod => {
    return Product.create(prod);
  }))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    },
    products,
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
