const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/budget')

// GET - /api/v1/budget/:userId
router.get('/:userId', (req, res) => {
  db.getUserBudget(req.params.userId)
    .then(camelcaseKeys)
    .then(budget => res.status(200).json(budget))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
