const router = require('express').Router()
const db = require('../db/fn/user')

const { isGetOwner, isWriteOwner } = require('../middleware')

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

// GET - /api/v1/users/:id/details
router.get('/:userId/details', isGetOwner, (req, res) => {
  db.getUserDetails(req.params.userId)
    .then((userDetail) => res.status(200).json(userDetail))
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// TODO PUT - /api/v1/users/profile/:profilesId
router.put('/profile/:profiles', isWriteOwner, (req, res) => {
  db.updateProfileDetails(req.params.profiles, req.body.details)
    .then(profile => res.sendStatus(200))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
