import React from 'react'
import './budget.css'
import Header from './Header'

import { connect } from 'react-redux'
import Goals from './Goals'
import BudgetCard from './BudgetCard'
import GoalModal from './Goals/GoalsModal'
import { getUserBudget } from '../../store/actions/budget'
import { Container } from 'semantic-ui-react'

class Budget extends React.Component {
  componentDidMount () {
    const { getUserBudget, userId } = this.props
    getUserBudget(userId)
  }

  render () {
    console.log(this.props)
    const { userId, budget } = this.props
    return (
      <div className='budget'>
        <Container>
          <Header />
          <BudgetCard data={{ userId, budget }} />
          <Goals />
          <GoalModal />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  budget: state.expense.all
})

export default connect(mapStateToProps, { getUserBudget })(Budget)
