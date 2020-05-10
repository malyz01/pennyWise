import React from 'react'
import { withRouter } from 'react-router-dom'

import './profile.css'

class BottomDetailsCardComponent extends React.Component {
  getTotalIncome = () => {
    return this.props.data.userIncome.reduce((ac, va) => ac + va.income_amount, 0)
  }
  getTotalExpense = () => {
    return this.props.data.expenseAmount.reduce((ac, va) => ac + va.expense_amount, 0)
  }
  getTotalBudget = () => {
    return (this.getTotalIncome() - this.getTotalExpense()).toFixed(2)
  }
  render () {
    const { history, data } = this.props
    return (
      <div className="bottomCardDetailsContainer">
        <div className="bottomButtonContainer">
          <button
            className="ui right labeled icon button"
            onClick={() => history.push('/income')}
          >
            <i className="right arrow icon"></i>
            manage your income
          </button>

          <button
            className="ui right labeled icon button"
            onClick={() => history.push('/expense')}
          >
            <i className="right arrow icon"></i>
            manage your expenses
          </button>

          <button
            className="ui right labeled icon button"
            onClick={() => history.push('/budget')}
          >
            <i className="right arrow icon"></i>
            manage your budget
          </button>
        </div>
        <div className="totalDisplayContainer">
          <h1 className="totalDisplayTitle">An Overview of your Finances</h1>
          <div className="totalDisplayBox">
            <div className="totalOverview">
              <p>Total Income</p>
              <p>Total Expenses</p>
              <p>Total Budget</p>
              <p>Total Goals</p>
            </div>
            <div className="moneyOverview">
              <p>{this.getTotalIncome()}</p>
              <p>{this.getTotalExpense()}</p>
              <p>{this.getTotalBudget()} per week</p>
              <p>{data.goalName.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BottomDetailsCardComponent)
