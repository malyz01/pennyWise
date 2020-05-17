import React from 'react'
import { withRouter } from 'react-router-dom'
import './profile.css'

import { addCommas } from '../helpers'

const r = (name) => (ac, va) => {
  if (va.active) {
    if (va.frequency === 'Monthly') {
      va[name] = (va[name] * 12) / 52
    }
    if (va.frequency === 'Annually') {
      va[name] = va[name] / 52
    }
    return ac + va[name]
  }
  return ac
}

class BottomDetailsCardComponent extends React.Component {
  state = {
    income: this.props.income.reduce(r('incomeAmount'), 0),
    expense: this.props.expense.reduce(r('expenseAmount'), 0)
  }

  render () {
    const { history } = this.props
    console.log(this.state)
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
              <p>{addCommas(this.state.income)} per week</p>
              <p>{addCommas(this.state.expense)} per week</p>
              <p>
                {addCommas(this.state.income - this.state.expense)} per week
              </p>
              <p>{this.props.goal.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BottomDetailsCardComponent)
