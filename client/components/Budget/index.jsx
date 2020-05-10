import React from 'react'
import './budget.css'
import Header from './Header'

import { connect } from 'react-redux'
import Goals from './Goals'
import BudgetCard from './BudgetCard'
import GoalModal from './Goals/GoalsModal'
import { getUserBudget } from '../../store/actions/budget'

class Budget extends React.Component {
  componentDidMount () {
    const { getUserBudget, userId } = this.props
    getUserBudget(userId)
  }

  render () {
    const { userId, expenses, income, goals } = this.props
    return (
      <div className="budget">
        <Header />
        <BudgetCard data={{ userId, expenses, income, goals }} />
        <Goals/>
        <GoalModal/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  expenses: state.expense.all,
  income: state.income.all,
  goals: state.goal.all
})

export default connect(mapStateToProps, { getUserBudget })(Budget)
