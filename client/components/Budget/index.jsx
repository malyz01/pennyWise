import React from 'react'
import './budget.css'
import Header from './Header'

import { connect } from 'react-redux'
import Goals from './Goals'
import BudgetCard from './BudgetCard'
import GoalModal from './Goals/GoalsModal'

class Budget extends React.Component {
  render () {
    return (
      <div className="budget">
        <Header />
        <BudgetCard />
        <Goals/>
        <GoalModal/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  budget: state
})

const mapDispatchToProps = {
  temp: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget)
