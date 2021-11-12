const router = require('express').Router()
const { models: { User }} = require('../db')
const Cart = require('../db/models/Cart')
const { requireToken, requireAdmin } = require('./gatekeepingMiddleware')
module.exports = router

// api/users/
router.get('/', requireToken, requireAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "isAdmin",
        "imageUrl",
        "shippingAddress",
        "billingAddress",
      ],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await User.findAll({
        where: {
          id: req.params.id,
        },
        attributes: ["id", "email", "firstName", "lastName", "isAdmin"],
      })
    );
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    req.send(user);
  } catch (ex) {
    next(ex);
  }
});
