/* eslint-disable no-console */
const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')
const convertArrToNumber = (goals) =>
  goals.map((g) => ({
    ...g,
    target_budget: parseFloat(g.target_budget),
    current_amount: parseFloat(g.current_amount),
    budget_distribution: parseFloat(g.budget_distribution)
  }))
const convertToNumber = (goal) =>
  ({
    ...goal,
    target_budget: parseFloat(goal.target_budget),
    current_amount: parseFloat(goal.current_amount),
    budget_distribution: parseFloat(goal.budget_distribution)
  })

function getAllGoals (db = connection) {
  return db('goals')
    .select()
    .catch(err => {
      console.error(err)
    })
}

function getUserGoals (userId, db = connection) {
  return db('goals')
    .where('user_id', userId)
    .select()
    .then(convertArrToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function addGoal (data, db = connection) {
  return db('goals')
    .insert(snakeCaseKeys(data))
    .returning('id')
    .then(([id]) => db('goals').where('id', id).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function updateGoal (goalId, data, db = connection) {
  return db('goals')
    .where('id', goalId)
    .update(snakeCaseKeys(data))
    .then(() => db('goals').where('id', goalId).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function deleteGoal (goalId, db = connection) {
  return db('goals')
    .where('id', goalId)
    .del()
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  getAllGoals,
  getUserGoals,
  addGoal,
  updateGoal,
  deleteGoal
}
