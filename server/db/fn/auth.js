const conn = require('../connection')
const bcrypt = require('bcrypt')

const authenticate = async (data, db = conn) => {
  try {
    const user = await db('users').where('email', data.email).first()
    if (typeof user === 'undefined') return 'Email does not exists'

    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) return 'Password does not match'

    return user
  } catch (err) {
    return 'Authentication - Something went wrong'
  }
}

const newUser = async (data, db = conn) => {
  const { password, confirmPassword, email } = data
  try {
    if (password !== confirmPassword) return 'Password does not match'
    const hashPassword = await bcrypt.hash(password, 10)
    const id = await db('users').insert({
      email,
      password: hashPassword
    })
    return { id: id[0], email }
  } catch (err) {
    return 'Username/Email is already taken'
  }
}

module.exports = {
  authenticate,
  newUser
}
