"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");
const faker = require("faker");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
// function randomCategory(max) {
//   return Math.floor(Math.random() * max) + 1;
// }
// const values = ["chair", "sofa", "table", "dresser"];
// let randomCate= values[randomCategory(3)];

// // Products Dummy data
// const dummyProducts = [
//   {
//     name: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     imageUrl: faker.image.imageUrl(),
//     price: faker.commerce.price(),
//     inventory: faker.datatype.number(),
//     category: randomCate,
//   }
// ];

const dummyProducts = [
  {
    name: "peachyChair",
    imageUrl:
      "https://media.istockphoto.com/photos/liivng-coralcolor-of-the-year-2019interior-design-for-living-area-or-picture-id1134702834?b=1&k=6&m=1134702834&s=170667a&w=0&h=2q1rjh0eKl02t3ZCfbeweubkljyd64fZJON5862nXRg=",
    description: "Its a cute lil sofa!",
    price: 800,
    inventory: 100,
    category: "chair",
  },
  {
    name: "peachySofa",
    imageUrl:
      "https://media.istockphoto.com/photos/liivng-coralcolor-of-the-year-2019interior-design-for-living-area-or-picture-id1134702834?b=1&k=6&m=1134702834&s=170667a&w=0&h=2q1rjh0eKl02t3ZCfbeweubkljyd64fZJON5862nXRg=",
    description: "Its a cute lil sofa!",
    price: 2200,
    inventory: 5,
    category: "sofa",
  },
  {
    name: "peachyTable",
    imageUrl:
      "   https://images.urbndata.com/is/image/Anthropologie/60451051_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
    description: "Its a cute lil table!",
    price: 1300,
    inventory: 11,
    category: "table",
  },
  {
    name: "peachyDresser",
    imageUrl:
      "https://images.urbndata.com/is/image/Anthropologie/40800781_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description: "Its a cute lil dresser!",
    price: 2400,
    inventory: 22,
    category: "dresser",
  },
];

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      email: "admin@admin.com",
      password: "123",
      firstName: "kelsey",
      lastName: "smith",
      isAdmin: true,
      imageUrl:
        "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
      shippingAddress: "449 Evergreen Ave",
      billingAddress: "SAME",
    }),
    User.create({
      email: "murphy@fsa.com",
      password: "123",
      firstName: "Murphy",
      lastName: "Jones",
      isAdmin: false,
    }),
  ]);

  // Creating Products
  let products = await Promise.all(
    dummyProducts.map((prod) => {
      return Product.create(prod);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    products,
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

// https://media.istockphoto.com/photos/liivng-coralcolor-of-the-year-2019interior-design-for-living-area-or-picture-id1134702834?b=1&k=6&m=1134702834&s=170667a&w=0&h=2q1rjh0eKl02t3ZCfbeweubkljyd64fZJON5862nXRg="
