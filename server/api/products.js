const router = require("express").Router();
const {
  models: { Product, Order },
} = require("../db"); // This will depend on the model
const Cart = require("../db/models/Cart");
const User = require("../db/models/User");
module.exports = router;

// GET api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET api/products/:productId
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = await Product.findByPk(req.params.productId);
    res.json(productId);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { isAdmin } = await User.findByToken(req.headers.authorization);
    if (isAdmin !== true) {
      const error = Error("Unauthorized access");
      error.status = 401;
      throw error;
    }
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// POST api/products/:productId
router.post("/:productId", async (req, res, next) => {
  try {
    // const product = await Product.findByPk(req.params.productId);

    const order = await Order.findOne({
      where: {
        userId: req.body.userId,
        isComplete: false,
      },
    });

    const cartItem = await Cart.findOne({
      where: {
        orderId: order.id,
        productId: req.params.productId,
      },
    });

    if (!cartItem) {
      await Cart.create({
        orderId: order.id,
        productId: req.params.productId,
        quantity: req.body.quantity,
      });
    } else {
      cartItem.update({ quantity: cartItem.quantity + req.body.quantity });
    }

    // const cartItem = await order.addProduct(product);

    res.status(cartItem);
  } catch (error) {
    next(error);
  }
});

// DELETE api/products/:productId

router.delete("/:productId");

// const cartItem = await Cart.findOne({
//   where: {
//     productId: req.params.productId,
//     orderId:
//   }
// })

// const userCart = await Cart.findByPk(cartItem.orderId);
// const productInCart = await Product.findByPk(cartItem.productId);

// if (req.params.action === 'increment') {
//   await cartItem.increment('quantity', { by: 1 })
// } else if (req.params.action === 'decrement') {
//   await cartItem.decrement('quantity', { by: 1 })
// } else if (req.params.action === 'remove') {
//   await userCart.destroy(productInCart);
// }
