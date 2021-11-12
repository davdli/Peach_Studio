const router = require('express').Router()
const Cart = require('../db/models/Cart')


// api/cart
router.get('/', async (req, res, next) => {
  try {
    const users = await Cart.findAll({
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
