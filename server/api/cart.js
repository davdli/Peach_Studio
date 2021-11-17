const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Order = require("../db/models/Order");
const { requireToken } = require("./gatekeepingMiddleware");

// increment, decrement, remove product from cart
//PUT api/cart
router.put("/", async (req, res, next) => {
  try {
    // console.log('This is req.body in cart',req.body);
    const {id}= req.body; // To protect against Injection of data to our server.
    const userOrder = await Order.findOne({
      where: {
        userId: id,
        isComplete: false,
      },
    });

    // console.log('This is usersOrder in cart',usersOrder);
    // const cartItems = await Order.findAll({
    //   where: {
    //     id: userOrder.id,
    //   },
    //   include: [{ model: Product }]

    // });
    // console.log('This is req.boody in cart', cartItems[0].products); // This will show the products in our cart! YAY!
    let cartItems= await userOrder.getProducts();
    // console.log('This is the cartItems',cartItems);
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
});
// POST api/cart
router.post("/",/*  requireToken, */ async (req, res, next) => {
  try {
    // console.log('This is req.body in cart',req.body);
    const {userId, productId}= req.body;
    const userOrder = await Order.findOne({
      where: {
        userId: userId,
        isComplete: false,
      }
    });
    let cartItems= await userOrder.removeProduct(productId);
    console.log('This is the cartItems',cartItems);
    cartItems=await userOrder.getProducts();
    res.json(cartItems);
  } catch (error) {
    next(error);
  }
});

//PUT api/cart/increase
router.put("/increase", async (req, res, next) => {
  try {
    const {userId, productId}= req.body;
    const order = await Order.findOne({
      where: {
        userId: userId,
        isComplete: false,
      },
    });

    const cartItem = await Cart.findOne({
      where: {
        orderId: order.id,
        productId: productId,
      },
    });

    await cartItem.update({ quantity: cartItem.quantity + 1 });
    let cartItems= await order.getProducts();

    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});
//PUT api/cart/decrease
router.put("/decrease", async (req, res, next) => {
  try {
    const {userId, productId}= req.body;
    const order = await Order.findOne({
      where: {
        userId: userId,
        isComplete: false,
      },
    });

    const cartItem = await Cart.findOne({
      where: {
        orderId: order.id,
        productId: productId,
      },
    });

    await cartItem.update({ quantity: cartItem.quantity - 1 });

    let cartItems= await order.getProducts();

    res.send(cartItems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
