const router = require('express').Router();
const {Product, OrderItem, Order} = require('../db')


// increment, decrement, remove product from cart
router.put('/:action/:productId/:orderId', async (req, res, next) => {
  try {
    const orderItem = await Order.findOne({
      where: {
        productId: req.params.productId,
        orderId: req.params.orderId
      }
    })

    const currrentOrder = await Order.findByPk(orderItem.orderId);
    const productInOrder = await Product.findByPk(orderItem.productId);

    if (req.params.action === 'increment') {
      await orderItem.update({quantity: orderItem.quantity++})
    } else if (req.params.action === 'decrement') {
      await orderItem.update({quantity: orderItem.quantity++})
    } else if (req.params.action === 'remove') {
      await currrentOrder.removeProduct(productInOrder);
    }

    res.send(productInOrder);

  } catch (error) {
    next(error);
  }
})

module.exports = router;
