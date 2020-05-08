const router = require('express').Router()
const db = require('../db/fn/user')

router.get('/', (req, res) => {
  return db
    .getProfiles()
    .then(camelcaseKeys)
    .then((profiles) => res.json(profiles))
})

// GET - /api/v1/users/profile
router.post('/profile', (req, res) => {
  db.getUserDetails(req.body.id)
    .then(profile => res.status(200).json(profile))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
