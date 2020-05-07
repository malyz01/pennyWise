// const passport = require('passport')
// const JWTstrategy = require('passport-jwt').Strategy
// const ExtractJWT = require('passport-jwt').ExtractJwt

// const opts = {
//   jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.SECRET_KEY
// }

// passport.use(
//   'jwt',
//   new JWTstrategy(opts, (jwtPayload, done) => {
//     try {
//       db.findUserJWT(jwtPayload.id)
//         .then(user => {
//           if (user) {
//             console.log('user is authorized for next action ', user.username)
//             done(null, user)
//           } else {
//             console.log('user not found in db')
//             done(null, false)
//           }
//         })
//     } catch (err) {
//       done(err)
//     }
//   })
// )

// module.exports = passport
