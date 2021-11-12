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

function generateUsers(qtyOfUsers) {
  let users = []
  for (let i = 0; i < qtyOfUsers; i++) {
    users.push({
      email: faker.internet.email(),
      password: '123',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      shippingAddress: `${faker.address.streetAddress()},${faker.address.city()},${faker.address.state()},${faker.address.zipCode()}`,
      billingAddress: `${faker.address.streetAddress()},${faker.address.city()},${faker.address.state()},${faker.address.zipCode()}`,
      isAdmin: faker.datatype.boolean(),
      // creditCard: faker.finance.creditCardNumber(), For some reason Sequelize throws an Error saying that is not a valid credit card
    });
  }
  return users;
};
function generateProducts(qtyOfProducts, qtyOfCategories) {
  let products = []
  for (let i = 0; i < qtyOfCategories; i++) {
    for (let j = 1; j <= qtyOfProducts; j++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        imageUrl: `/${totalCategories[i]}${j}.jpg`,
        price: faker.commerce.price(),
        inventory: faker.datatype.number(),
        category: totalCategories[i],
      });
    }
  }
  return products;
};
// Considering that one User can have only one ACTIVE order we create as many Orders as Users
function generateOrders(qtyOfUsers) {
  let orders = [];
  for (let i = 1; i <= qtyOfUsers; i++) {
    orders.push({
      userId: i,
    });
  }
  return orders;
};
// The Cart can have any amount of Products(well no more than our INVENTORY)
// The logic in here is that ONE static OrderId can have many ProductsId, but THAT IS WRONG because we will overwrite the order with new items,BUT...
// function generateCarts(qtyOfActiveOrders) {
//   let carts = [];
//   for (let i = 1; i <= qtyOfActiveOrders; i++) {
//     for (let j = 1; j <= 4; j++) {
//       carts.push({
//         orderId: i,
//         productId:j,
//       });
//     }
//   }
//   return carts;
// }
// ^^^Not sure if this is correct ^^^

function generateCarts(anyQtyOfOrders) {
  let cartsArray = [];
  for (let i = 1; i <= anyQtyOfOrders; i++) {
    cartsArray.push({
      orderId: i,
      productId: i,
    });
  }
  return cartsArray;
}

// Creating the dummy data
const qtyOfUsers = 10;
const totalCategories = ['chair', 'dresser', 'sofa', 'table'];
const qtyOfCategories = totalCategories.length;
const qtyOfProducts = 4;
const dummyUsers = generateUsers(qtyOfUsers);
const dummyProducts = generateProducts(qtyOfProducts, qtyOfCategories);
const dummyOrders = generateOrders(qtyOfUsers);
const dummyCarts = generateCarts(1);

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log(`starting seeding`);

  // Creating Users
  let users = await Promise.all(
    dummyUsers.map((user) => {
      return User.create(user);
    })
  );
  //create sample admin
  const admin = await User.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: 'admin@admin.com',
    password: '12345',
    isAdmin: true
  });
  console.log('Seeded admin');
  // Creating Products
  let products = await Promise.all(
    dummyProducts.map((prod) => {
      return Product.create(prod);
    })
  );
  // Creating Orders
  let orders = await Promise.all(
    dummyOrders.map((ord) => {
      return Order.create(ord);
    })
  );
  // Creating Carts
  let carts = await Promise.all(
    dummyCarts.map((cart) => {
      return Cart.create(cart);
    })
  );

  console.log("db synced!");
  console.log(`seeded successfully`);
  return {
    users: [users, admin],
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
