const router = require('express').Router()
const { models: { User } } = require('../db')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    // for protecting our database against injection attacks
    const { email, password } = req.body;
    res.send({ token: await User.authenticate({email, password}) });
  } catch (err) {
    next(err)
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    // for protecting our database against injection attacks
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.send({ token: await user.generateToken() })
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})
