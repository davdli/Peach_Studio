const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "sofa.png",
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 0,
    },
  },
  inventory: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
  },
  category: {
    type: Sequelize.ENUM,
    values: ["chair", "sofa", "table", "dresser"],
  },
});

module.exports = Product;
