const passport = require('../config/passport')
const db = require('../db/connection')

module.exports = {
  isLoggedIn: () => passport.authenticate('jwt', { session: false }),
  isGetOwner: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (user.id !== Number(req.params.userId)) {
        return res.status(401).json('Unauthorize Access')
      }
      next()
    })(req, res, next)
  },
  isWriteOwner: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      const dataName = Object.keys(req.params)[0]
      if (err) {
        return next(err)
      }
      const data = await db(dataName).where('id', req.params[dataName]).select('user_id').first()
      if (user.id !== data.user_id) {
        return res.status(401).json('Unauthorize Access')
      }
      next()
    })(req, res, next)
  }
}
