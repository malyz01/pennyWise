import React from 'react'
import './budget.css'
import Header from './Header'

import { connect } from 'react-redux'
import Goals from './Goals'
import BudgetCard from './BudgetCard'
import GoalModal from './Goals/GoalsModal'
import { getUserBudget } from '../../store/actions/budget'
import { Container } from 'semantic-ui-react'

import { loading } from '../../store/actions/loading'
import Loading from '../Loading'

class Budget extends React.Component {
  async componentDidMount () {
    this.props.loading(true)
    await this.props.getUserBudget(this.props.userId)
    this.props.loading(false)
  }

  render () {
    console.log(this.props)

    const { expense, income, goal } = this.props
    if (!this.props.loading) return <Loading/>
    return (
      <div className="budget">
        <Container>
          <Header />
          <BudgetCard expense={expense} income={income} goal={goal} />
          <Goals />
          <GoalModal />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  expense: state.expense.all,
  income: state.income.all,
  goal: state.goal.all
})

export default connect(mapStateToProps, { getUserBudget, loading })(Budget)
