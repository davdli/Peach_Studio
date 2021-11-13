const router = require("express").Router();
const {
  models: { Product, Order },
} = require("../db"); // This will depend on the model
const Cart = require("../db/models/Cart");
const User = require("../db/models/User");
const { requireToken } = require("./gatekeepingMiddleware");
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

// PUT api/products/:productId
// Is this the cart route?
router.put("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    const user = await User;
    // Order.create(product);
    res.status(201).send(await Product.setUser(req.body));
  } catch (error) {
    next(error);
  }
});

// POST api/products/:productId
router.post("/:productId", requireToken, async (req, res, next) => {
  try {
    //recieve an object with user id and order id attatched
    //
    // if the object has an order id

    //
    const product = await Product.findByPk(req.params.productId);
    //check if the user has an order id and if they dont we have to go to line 64

    //this is find the users current cart before checkout before adding to cart
   const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isComplete: false,
      },
    });
    // if the user doesnt have a cart we have to create a cart
    await Order.create({
      userId: req.user.id,
      isComplete: false,
    });

    const cartItem = await order.addProduct(product);

    res.json(cartItem);
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
