function cta (frequency, amount) {
  if (frequency === 'Annually') return amount
  if (frequency === 'Monthly') return amount * 12
  if (frequency === 'Weekly') return amount * 52
}

function ctm (amount) {
  return (amount / 12).toFixed(2)
}

function ctw (amount) {
  return (amount / 52).toFixed(2)
}

function getTotalContribution (arr) {
  return arr.reduce((a, v) => {
    if (v.active) {
      return a + cta(v.frequency, v.budgetDistribution)
    }
    return a
  }, 0)
}

function getTotalIncome (income) {
  return income.reduce((a, v) => {
    if (v.active) {
      return a + cta(v.frequency, v.incomeAmount)
    }
    return a
  }, 0)
}

function getTotalExpense (expense) {
  return expense.reduce((a, v) => {
    if (v.active) {
      return a + cta(v.frequency, v.expenseAmount)
    }
    return a
  }, 0)
}

function getTotalBudget (income, expense) {
  return (getTotalIncome(income) - getTotalExpense(expense)).toFixed(2)
}

function getUnallocatedBudget (income, expense, goals) {
  const totalBudget = getTotalBudget(income, expense)
  const totalContribution = getTotalContribution(goals)
  const allocatedBudget = totalBudget - totalContribution

  return allocatedBudget.toFixed(2)
}

export default {
  cta,
  ctm,
  ctw,
  getTotalContribution,
  getTotalBudget,
  getUnallocatedBudget
}
