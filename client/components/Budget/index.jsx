import React from 'react'
import './budget.css'
import Header from './Header'

import BudgetCard from './BudgetCard'

class Budget extends React.Component {
  render () {
    return (
      <div className="budget">
        <Header />
        <BudgetCard />
      </div>
    )
  }
}

export default Budget
