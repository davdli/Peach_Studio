const router = require('express').Router();
const {Order, Cart, Product} = require('../db')


// increment, decrement, remove product from cart
router.put('/:action/:productId/:orderId', async (req, res, next) => {
  try {
    const cartItem = await Cart.findOne({
      where: {
        productId: req.params.productId,
        orderId: req.params.orderId
      }
    })

    const userCart = await Cart.findByPk(cartItem.orderId);
    const productInCart = await Product.findByPk(cartItem.productId);

    if (req.params.action === 'increment') {
      await cartItem.increment('quantity', { by: 1 })
    } else if (req.params.action === 'decrement') {
      await cartItem.decrement('quantity', { by: 1 })
    } else if (req.params.action === 'remove') {
      await userCart.destroy(productInCart);
    }

    res.send(cartItem);

  } catch (error) {
    next(error);
  }
})

module.exports = router;
