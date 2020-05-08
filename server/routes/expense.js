const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/expense')

// router.get('/', (req, res) => {
//   return db.getFoods()
//     .then(camelcaseKeys)
//     .then(foods => res.status(200).json(foods))
// })

// GET - /api/v1/expense/:userId
router.get('/:userId', (req, res) => {
  db.getExpensesForSingleUser(req.params.userId)
    .then(expenses => res.status(200).json(expenses))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// //POST route
// router.post('/:userId')

module.exports = router
