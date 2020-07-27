class Contribution {
  #yearlyContri

  constructor(contribution, frequency) {
    if (frequency === 'w') contribution * 52
    if (frequency === 'm') contribution * 12
    if (frequency === 'a') contribution
  }

  get weekly() {
    return this.twoDecimal(this.#yearlyContri / 52)
  }

  get monthly() {
    return this.twoDecimal(this.#yearlyContri / 12)
  }

  get annually() {
    return this.twoDecimal(this.#yearlyContri)
  }

  twoDecimal(num) {
    return +num.toFixed(2)
  }
}

function cta(frequency, amount) {
  if (frequency === 'Annually') return amount
  if (frequency === 'Monthly') return amount * 12
  if (frequency === 'Weekly') return amount * 52
}

function ctm(amount) {
  return amount / 12
}

function ctw(amount) {
  return amount / 52
}

function getTotalContribution(arr) {
  return arr.reduce((a, v) => {
    if (v.active) {
      return a + cta(v.frequency, v.budgetDistribution)
    }
    return a
  }, 0)
}

function getTotalIncome(income) {
  return income.reduce((a, v) => {
    if (v.active) {
      return a + cta(v.frequency, v.incomeAmount)
    }
    return a
  }, 0)
}

function getTotalExpense(expense) {
  return expense.reduce((a, v) => {
    if (v.active) {
      return a + cta(v.frequency, v.expenseAmount)
    }
    return a
  }, 0)
}

function getTotalBudget(income, expense) {
  return getTotalIncome(income) - getTotalExpense(expense)
}

function getUnallocatedBudget(income, expense, goals) {
  const totalBudget = getTotalBudget(income, expense)
  const totalContribution = getTotalContribution(goals)
  const allocatedBudget = totalBudget - totalContribution

  return allocatedBudget
}

export default {
  Contribution,
  cta,
  ctm,
  ctw,
  getTotalContribution,
  getTotalBudget,
  getUnallocatedBudget
}
