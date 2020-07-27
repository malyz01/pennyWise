export function getAnnualContribution(daysNumber, currentAmount, budget) {
  const yearsRemaining = Math.ceil(daysNumber / 365)
  const paymentRemaining = budget - currentAmount
  return Number((paymentRemaining / yearsRemaining).toFixed(2))
}

export function getMonthlyContribution(daysNumber, currentAmount, budget) {
  const yearsRemaining = Math.ceil(daysNumber / 365)
  const monthsRemaining = yearsRemaining * 12
  const paymentRemaining = budget - currentAmount
  return Number((paymentRemaining / monthsRemaining).toFixed(2))
}

export function getWeeklyContribution(daysNumber, currentAmount, budget) {
  if (daysNumber < 0) daysNumber = 0
  const weeksRemaining = Math.ceil(daysNumber / 7)
  const paymentRemaining = budget - currentAmount
  const weeklyContributions = Number(paymentRemaining / weeksRemaining)
  if (weeklyContributions === Infinity) return '-'
  return weeklyContributions === 0 ? '-' : weeklyContributions.toFixed(2)
}
