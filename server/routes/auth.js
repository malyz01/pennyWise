const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Auth = require('../db/functions/auth')

// path - /api/v1/auth/logout
router.get('/logout', (req, res) => {
  res.json({})
})

// path - /api/v1/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const auth = await Auth.authenticate(req.body)
    if (typeof auth === 'string' || auth instanceof String) { return next({ status: 400, message: auth }) }
    const { id, username, type } = auth
    const token = jwt.sign({ id, username, type }, process.env.SECRET)
    res.status(200).json({ id, username, type, token })
  } catch (err) {
    return next({ status: 500, message: 'Login - Something went wrong' })
  }
})

// path - /api/v1/auth/register
router.post('/register', async (req, res, next) => {
  try {
    const user = await Auth.newUser(req.body)
    if (typeof user === 'string' || user instanceof String) { return next({ status: 400, message: user }) }
    const token = jwt.sign(user, process.env.SECRET)
    res.status(200).json({ ...user, token })
  } catch (err) {
    return next({ status: 500, message: 'Register - Something went wrong' })
  }
})

module.exports = router
