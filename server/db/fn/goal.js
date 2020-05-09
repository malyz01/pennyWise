const connection = require('../connection')

function getAllGoals (db = connection) {
  return db('goals')
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUserGoal (userId, db = connection) {
  return db('goals')
    .where('user_id', userId)
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function addGoal (data, db = connection) {
  return db('goals')
    .insert(data)
    .then(([id]) => db('goals')
      .where('user_id', id)
      .select()
      .first())
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateGoal (goalId, data, db = connection) {
  return db('goals')
    .where('id', goalId)
    .update(data)
    .then(() => db('goals')
      .where('id', goalId)
      .select()
      .first())
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteGoal (goalId, db = connection) {
  return db('goals')
    .where('id', goalId)
    .del()
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getAllGoals,
  getUserGoal,
  addGoal,
  updateGoal,
  deleteGoal
}
