"use strict";

const {
  db,
  models: { User, Product, Order, Cart },
} = require("../server/db");
const faker = require("faker");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
const values = ["chair", "sofa", "table", "dresser"];
let randomCategory = values[randomNumber(3)];

function generateUsers(num) {
  let users = []
  for (let i = 0; i < num; i++) {
    users.push({
      email: faker.internet.email(),
      password: '123',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      shippingAddress: `${faker.address.streetAddress()},${faker.address.city()},${faker.address.state()},${faker.address.zipCode()}`,
      billingAddress: `${faker.address.streetAddress()},${faker.address.city()},${faker.address.state()},${faker.address.zipCode()}`,
      isAdmin: faker.datatype.boolean(),
      // creditCard: faker.finance.creditCardNumber(),
    });
  }
  return users;
};

function generateProducts(num) {
  let products = []
  for (let i = 0; i < num; i++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      imageUrl: faker.image.imageUrl(),
      price: faker.commerce.price(),
      inventory: faker.datatype.number(),
      category: randomCategory,
    });
  }
  return products;
};

function generateOrders(num) {
  let orders = []
  for (let i = 1; i <= num; i++) {
    orders.push({
      userId: i,
    });
  }
  return orders;
};

function generateCarts(num) {
  let carts = []
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 4; j++) {
      carts.push({
        orderId: i,
        productId:j,
      });
    }
  }
  return carts;
}

// Creating the dummy data
const qtyOfUsers = 10;
const qtyOfProducts = 20;
const dummyUsers = generateUsers(qtyOfUsers);
const dummyProducts = generateProducts(qtyOfProducts);
const dummyOrders = generateOrders(qtyOfUsers);
const dummyCarts= generateCarts(qtyOfUsers);

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log(`starting seeding`);

  // Creating Users
  let users = await Promise.all(
    dummyUsers.map((user) => {
      return User.create(user);
    })
  );
  // Creating Products
  let products = await Promise.all(
    dummyProducts.map((prod) => {
      return Product.create(prod);
    })
  );
  // Creating Orders
  let orders = await Promise.all(
    dummyOrders.map((prod) => {
      return Order.create(prod);
    })
  );
    // Creating Carts
  let carts = await Promise.all(
    dummyCarts.map((prod) => {
      return Cart.create(prod);
    })
  );

  console.log("db synced!");
  console.log(`seeded successfully`);
  return {
    users,
    products,
    orders,
    carts,
  };
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
