const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  // total: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0,
  // },
  notPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Order;



