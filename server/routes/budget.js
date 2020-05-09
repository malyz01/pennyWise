const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/expense')

// GET - /api/v1/expense/:userId
// Complete Postman Testing
router.get('/:userId', (req, res) => {
  db.getUserExpenses(req.params.userId)
    .then(camelcaseKeys)
    .then(expenses => res.status(200).json(expenses))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})