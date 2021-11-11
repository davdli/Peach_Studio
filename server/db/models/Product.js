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
    defaultValue:
      "https://cdn-images.article.com/products/SKU12298/2890x1500/image43595.jpg?fit=max&w=970&q=80&fm=webp",
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
