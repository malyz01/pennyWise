const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Auth = require('../db/fn/auth')

// path - /api/v1/auth/login
router.post('/login', async (req, res) => {
  try {
    const auth = await Auth.authenticate(req.body)
    if (typeof auth === 'string' || auth instanceof String) {
      return res.status(400).json(auth)
    }
    const token = jwt.sign(auth, process.env.SECRET)
    res.status(200).json({ ...auth, token })
  } catch (err) {
    res.status(400).json(err.message)
  }
})

// path - /api/v1/auth/register
router.post('/register', async (req, res) => {
  try {
    const auth = await Auth.newUser(req.body)
    if (typeof auth === 'string' || auth instanceof String) {
      return res.status(400).json(auth)
    }
    const token = jwt.sign(auth, process.env.SECRET)
    res.status(200).json({ ...auth, token })
  } catch (err) {
    res.status(400).json(err.message)
  }
})

module.exports = router
