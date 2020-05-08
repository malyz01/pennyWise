const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/expense')

router.get('/', (req, res) => {
  return db
    .getExpense()
    .then(camelcaseKeys)
    .then((expense) => res.json(expense))
})

// GET - /api/v1/expense/:userId
router.get('/:userId', (req, res) => {
  db.getExpense(req.params.userId)
    .then(expenses => res.status(200).json(expenses))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// POST /api/v1/expense/:userId
router.post('/:userId', (req, res) => {
  const newExpense = req.body
  db.addExpense(newExpense)
    .then(expense => res.status(200).json(expense))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// PUT - /api/v1/expense/:userId
router.put('/:userId', (req, res) => {
  const id = Number(req.params.userId)
  const newExpense = req.body
  db.updateExpense(id, newExpense)
    .then(() => {
      res.status(202).send()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
