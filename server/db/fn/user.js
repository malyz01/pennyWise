const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')

function getUserProfile (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .join('profiles', 'users.id', 'profiles.user_id')
    .select(
      'users.id as id',
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

function getUserDetails (id, db = connection) {
  return db('income')
    .where('user_id', id)
    .select('income_amount')
    .then((userIncome) => {
      return db('expense')
        .where('user_id', id)
        .select('expense_amount')
        .then((expenseAmount) => ({
          userIncome,
          expenseAmount
        }))
    })
    .then((userData) => {
      return db('goals')
        .where('user_id', id)
        .select('goal_name')
        .then((goalName) => ({
          ...userData,
          goalName
        }))
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateProfileDetails (userId, data, db = connection) {
  return db('profiles')
    .where('user_id', userId)
    .update(snakeCaseKeys(data))
    .then(() => db('profiles')
      .where('user_id', userId)
      .join('users', 'profiles.user_id', 'users.id')
      .select(
        'users.id as id',
        'profiles.full_name as fullName',
        'users.email',
        'profiles.avatar')
      .first())
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
  getUserProfile,
  getUserDetails,
  updateProfileDetails,
  getUsers,
  getProfiles,
  deleteUserById
}
