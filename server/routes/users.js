const router = require('express').Router()
const db = require('../db/fn/user')

const { isGetOwner } = require('../middleware')

router.get('/', (req, res) => {
  return db
    .getProfiles()
    .then((profiles) => res.json(profiles))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// GET - /api/v1/users/:userId/profile
router.get('/:userId/profile', isGetOwner, (req, res) => {
  db.getUserProfile(req.params.userId)
    .then((userDetail) => res.status(200).json(userDetail))
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// GET - /api/v1/users/:userId/details
router.get('/:userId/details', isGetOwner, (req, res) => {
  db.getUserDetails(req.params.userId)
    .then((userDetail) => res.status(200).json(userDetail))
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// PUT - /api/v1/users/:userId/profile
router.put('/:userId/profile', isGetOwner, (req, res) => {
  db.updateProfileDetails(req.params.userId, req.body)
    .then(profile => res.status(200).json(profile))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
