const router = require('express').Router()
const { models: { Product, Order } } = require('../db'); // This will depend on the model
const User = require('../db/models/User');
module.exports = router

// GET api/products
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

// GET api/products/:productId
router.get('/:productId', async (req, res, next) => {
    try {
        const productId = await Product.findByPk(req.params.productId);
        res.json(productId);
    } catch (error) {
        next(error);
    }
});

// PUT api/products/:productId
// Is this the cart route?
router.put('/:productId', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId, {
            include: [{
                model: OrderItem,
            }]
        });
        const user = await User
            // Order.create(product);
            res.status(201).send(await Product.setUser(req.body));
    } catch (error) {
        next(error);
    }
});

// DELETE api/products/:productId

router.delete('/:productId',)
