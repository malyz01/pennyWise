const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/expense')
const { isLoggedInAndOwner } = require('../middleware')

// GET - /api/v1/expense/:userId
// Complete Postman Testing
router.get('/:userId', isLoggedInAndOwner, (req, res, next) => {
  db.getUserExpenses(req.params.userId)
    .then(camelcaseKeys)
    .then((expenses) => res.status(200).json(expenses))
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// POST /api/v1/expense/:userId
// Complete Postman Testing
router.post('/:userId', isLoggedInAndOwner, (req, res) => {
  db.addUserExpense({ ...req.params, ...req.body })
    .then(camelcaseKeys)
    .then(expense => res.status(200).json(expense))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// PUT - /api/v1/expense/:expenseId
// Complete Postman Testing
router.put('/:expenseId', (req, res) => {
  db.updateUserExpense(req.params.expenseId, req.body)
    .then(camelcaseKeys)
    .then(d => {
      res.status(200).json(d)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// DELETE - /api/v1/expense/:expenseId
// Complete Postman Testing
router.delete('/:expenseId', (req, res) => {
  db.deleteUserExpense(req.params.expenseId)
    .then(camelcaseKeys)
    .then(() => {
      res.status(200).json(req.params.expenseId)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
