const router = require("express").Router();
const {
  models: { User, Order },
} = require("../db");
const { requireToken } = require('./gatekeepingMiddleware');
module.exports = router;

// /api/users
router.get("/", requireToken, async (req, res, next) => {
  try {
    const { isAdmin } = await User.findByToken(req.headers.authorization);
    if (isAdmin !== true) {
      const error = Error("Unauthorized access");
      error.status = 401;
      throw error;
    }
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// api/users/:id
router.put("/:id", /* requireToken, */ async (req, res, next) => {// Is not authorizinng the token :/
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.id,
        isComplete: false,
      }
    });
    await userOrder.update({ isComplete: true });
    const user = await User.findByPk(req.params.id);
    await user.createOrder();
    res.json(userOrder);
  } catch (err) {
    next(err);
  }
});

// /api/users/:id/orders
router.get("/:id/orders", requireToken, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where:{
        userId: req.params.id,
        isComplete: true,
      }
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});
