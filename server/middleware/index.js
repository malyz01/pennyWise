const passport = require('../config/passport')

module.exports = {
  isLoggedIn: () => passport.authenticate('jwt', { session: false }),
  isLoggedInAndOwner: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (user.id !== Number(req.params.userId)) {
        return res.status(401).json('Unauthorize Access')
      }
      next()
    })(req, res, next)
  }
}
