const router = require('express').Router()
const db = require('../db/fn/user')

router.get('/', (req, res) => {
  return db
    .getProfiles()
    .then((profiles) => res.json(profiles))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// GET - /api/v1/users/:id/profile
router.get('/:id/profile', (req, res) => {
  db.getUserDetails(req.params.id)
    .then(profile => res.status(200).json(profile))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// PUT - /api/v1/users/profile

router.put('/profile', (req, res) => {
  db.updateProfileDetails(req.body.id, req.body.details)
    .then(profile => res.sendStatus(200))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
