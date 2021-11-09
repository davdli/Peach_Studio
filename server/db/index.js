//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");

const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");
const Product = require("./models/Product");

// Order.hasMany(OrderItem);
// OrderItem.belongsTo(Order);
// OrderItem.belongsTo(Product);

Product.belongsToMany(Order, { through: OrderItem });
Order.belongsToMany(Product, { through: OrderItem });

Order.belongsTo(User);
User.hasOne(Order);

module.exports = {
  db,
  models: {
    User,
    Order,
    OrderItem,
    Product,
  },
};
