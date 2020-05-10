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
      <>
        <div className="budget">
          <Header />
          <BudgetCard />
        </div>
        <div className='budgetMainContainer'>
          <div className='budgetHeaderContainer'>
            <h1 className="budgetHeader">MANAGE YOUR BUDGETS AND SAVINGS HERE</h1>
            <div className="BudgetHeaderLine"></div>
            <p className="budgetPTags">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="budgetPTags">Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</p>
          </div>

          <div className='budgetCardContainer'>
            <div className='diagonalBG'></div>
            <div className='solidBG'>
              <BudgetCard />
            </div>
          </div>
          <Goals />
          <GoalModal />
        </div>
      </>
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
