//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Order = require("./models/Order");
const Cart = require("./models/Cart");
const Product = require("./models/Product");


Product.belongsToMany(Order, { through: Cart });
Order.belongsToMany(Product, { through: Cart });

Order.belongsTo(User);
User.hasMany(Order);


module.exports = {
  db,
  models: {
    User,
    Order,
    Cart,
    Product,
  },
};
