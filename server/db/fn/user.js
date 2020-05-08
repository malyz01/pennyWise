const connection = require('../connection')

function getUserDetails (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .join('profiles', 'users.id', 'profiles.user_id')
    .select(
      'users.id as userId',
      'profiles.full_name as fullName',
      'users.email',
      'profiles.avatar'
    )
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getUserDetails
}
