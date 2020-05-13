import React from 'react'
import { withRouter } from 'react-router-dom'
import { addCommas } from '../helpers'

import './profile.css'

class BottomDetailsCardComponent extends React.Component {
  state = {
    income: 0,
    expense: 0
  }

  componentDidMount () {
    this.getTotalExpense()
    this.getTotalIncome()
  }

  r = (name) => (ac, va) => {
    if (va.active) {
      if (va.frequency === 'Monthly') {
        va[name] = va[name] * 12 / 52
      }
      if (va.frequency === 'Annually') {
        va[name] = va[name] / 52
      }
      return (ac + va[name])
    }
    return ac
  }

  getTotalIncome = () => {
    const { income } = this.props
    this.setState({ income: income.reduce(this.r('incomeAmount'), 0).toFixed(2)
    })
  }

  getTotalExpense = () => {
    const { expense } = this.props
    this.setState({
      expense: expense.reduce(this.r('expenseAmount'), 0).toFixed(2)
    })
  }

  render () {
    const { history } = this.props
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

              <p>${addCommas(this.state.income)} per week</p>
              <p>${addCommas(this.state.expense)} per week</p>
              <p>${addCommas(this.state.income - this.state.expense)} per week</p>
              <p>{addCommas(this.props.goal.length, true)}</p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BottomDetailsCardComponent)
