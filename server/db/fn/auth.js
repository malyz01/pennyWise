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
  const { code, password, confirmPassword, ...username } = data
  try {
    if (password !== confirmPassword) return 'Password does not match'
    let newUser = username
    const hashPassword = await bcrypt.hash(data.password, 10)
    newUser.type = data.code === process.env.ADMINCODE ? 'admin' : 'user'
    const [id] = await db('users').insert({
      ...newUser,
      password: hashPassword
    })
    return { id, ...newUser }
  } catch (err) {
    return 'Username/Email is already taken'
  }
}

module.exports = {
  authenticate,
  newUser
}
