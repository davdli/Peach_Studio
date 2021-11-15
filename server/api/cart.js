const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Order = require("../db/models/Order");
const Product = require("../db/models/Product");
const User = require("../db/models/User");

// increment, decrement, remove product from cart
router.put("/", async (req, res, next) => {
  try {
    // console.log('This is req.boody in cart',req.body);
    const usersOrder = await Order.findOne({
      where: {
        userId: req.body.id,
        isComplete: false,
      },
    });

    // console.log('This is usersOrder in cart',usersOrder);
    const cartItems = await Order.findAll({
      where: {
        id: usersOrder.id,
      },
      include: [{ model: Product }],
    });

    // console.log('This is req.boody in cart', cartItems[0].products); // This will show the products in our cart! YAY!

    res.json(cartItems);
  } catch (error) {
    next(error);
  }
});

//PUT api/cart/increase
router.put("/increase", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.body.userId,
        isComplete: false,
      },
    });

    const cartItem = await Cart.findOne({
      where: {
        orderId: order.id,
        productId: req.body.productId,
      },
    });

    cartItem.update({ quantity: cartItem.quantity + 1 });

    const cartItems = await Order.findAll({
      where: {
        id: order.id,
      },
      include: [{ model: Product }],
    });
    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
