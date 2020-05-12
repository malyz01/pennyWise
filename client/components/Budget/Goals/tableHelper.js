export function getAnnualContribution (daysNumber, currentAmount, budget) {
  const yearsRemaining = Math.ceil(daysNumber / 365)
  const paymentRemaining = budget - currentAmount
  return Number((paymentRemaining / yearsRemaining).toFixed(2))
}

export function getMonthlyContribution (daysNumber, currentAmount, budget) {
  const yearsRemaining = Math.ceil(daysNumber / 365)
  const monthsRemaining = yearsRemaining * 12
  const paymentRemaining = budget - currentAmount
  return Number((paymentRemaining / monthsRemaining).toFixed(2))
}

export function getWeeklyContribution (daysNumber, currentAmount, budget) {
  const weeksRemaining = Math.ceil(daysNumber / 7)
  const paymentRemaining = budget - currentAmount
  return Number((paymentRemaining / weeksRemaining).toFixed(2))
}
