const router = require("express").Router();
module.exports = router;

// api/users
router.use("/users", require("./users"));

// api/products
router.use("/products", require("./products"));

// api/cart
router.get('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
