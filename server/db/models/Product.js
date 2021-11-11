const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'Waiting for a nice description :)',
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "sofa.png",
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
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
