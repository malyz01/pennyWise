const router = require('express').Router()
const db = require('../db/fn/budget')
const { isGetOwner } = require('../middleware')

// GET - /api/v1/budget/:userId
router.get('/:userId', isGetOwner, (req, res) => {
  db.getUserBudget(req.params.userId)
    .then(budget => res.status(200).json(budget))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
