const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  // total: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0,
  // },
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Order;
