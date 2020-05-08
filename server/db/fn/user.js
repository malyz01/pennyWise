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
    .first()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateProfileDetails (id, details, db = connection) {
  return db('profiles')
    .where('profiles.id', id)
    .update({ ...details })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUsers (db = connection) {
  return db('users')
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
function getProfiles (db = connection) {
  return db('profiles')
    .select()
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteUserById (id, db = connection) {
  return db('users')
    .where('id', id)
    .del()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getUserDetails,
  updateProfileDetails,
  getUsers,
  getProfiles,
  deleteUserById
}
