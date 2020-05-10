function cty (frequency, amount) {
  if (frequency === 'Yearly') return amount
  if (frequency === 'Monthly') return amount * 12
  if (frequency === 'Weekly') return amount * 52
}

function ctm (amount) {
  return amount / 12
}

function ctw (amount) {
  return amount / 52
}

function getTotalFrequency (arr) {
  return arr.reduce((a, v) => {
    return a + cty(v.frequency, v.budgetDistribution)
  }, 0)
}

export default {
  cty,
  ctm,
  ctw,
  getTotalFrequency
}
