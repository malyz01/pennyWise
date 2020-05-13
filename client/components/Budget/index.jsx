import React from 'react'
import './budget.css'
import Header from './Header'

import { connect } from 'react-redux'
import Goals from './Goals'
import BudgetCard from './BudgetCard'
import { getUserBudget } from '../../store/actions/budget'
import { Container } from 'semantic-ui-react'

import { loading } from '../../store/actions/loading'
import Loading from '../Loading'
import Fade from 'react-reveal/Fade'

class Budget extends React.Component {
  state = {
    expense: [],
    income: [],
    goal: []
  }
  componentDidMount () {
    this.props.getUserBudget(this.props.userId)
    this.setState({
      expense: this.props.expense,
      income: this.props.income,
      goal: this.props.goal
    })
  }

  componentWillUnmount () {
    this.props.loading('budget', true)
  }
  componentDidUpdate (prevProps) {
    if (this.props.expense !== prevProps.expense ||
       this.props.income !== prevProps.income ||
       this.props.goal !== prevProps.goal) {
      this.setState({
        expense: this.props.expense,
        income: this.props.income,
        goal: this.props.goal
      })
    }
  }
  render () {
    const { expense, income, goal } = this.state
    if (this.props.load) return <Loading/>
    return (
      <div className="budget">
        <Container>
          <Header />
          <Fade><BudgetCard expense={expense} income={income} goal={goal} /></Fade>
          <Goals />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  load: state.loading.budget,
  userId: state.auth.user.id,
  expense: state.expense.all,
  income: state.income.all,
  goal: state.goal.all
})

export default connect(mapStateToProps, { getUserBudget, loading })(Budget)
