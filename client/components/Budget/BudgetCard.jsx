import React, { Component, Fragment } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './budget.css'
import h from './helper'
import BudgetCell from './BudgetCell'
import { addCommas } from '../helpers'

const options = [
  { key: 'w', value: 'Weekly', text: 'Weekly' },
  { key: 'm', value: 'Monthly', text: 'Monthly' },
  { key: 'a', value: 'Annually', text: 'Annually' }
]

class BudgetCard extends Component {
  state = {
    frequency: 'Weekly',
    percentStart: 0
  }

  renderTotalBudget = () => {
    const { income, expense } = this.props
    if (this.state.frequency === 'Weekly') {
      return h.ctw(h.getTotalBudget(income, expense))
    }
    if (this.state.frequency === 'Monthly') {
      return h.ctm(h.getTotalBudget(income, expense))
    }
    if (this.state.frequency === 'Annually') {
      return h.getTotalBudget(income, expense)
    }
  }

  renderTotalContribution = () => {
    const { goal } = this.props
    if (this.state.frequency === 'Weekly') {
      return h.ctw(h.getTotalContribution(goal))
    }
    if (this.state.frequency === 'Monthly') {
      return h.ctm(h.getTotalContribution(goal))
    }
    if (this.state.frequency === 'Annually') {
      return h.getTotalContribution(goal)
    }
  }

  renderUnallocatedBudget = () => {
    const { income, expense, goal } = this.props
    if (this.state.frequency === 'Weekly') {
      return h.ctw(h.getUnallocatedBudget(income, expense, goal))
    }
    if (this.state.frequency === 'Monthly') {
      return h.ctm(h.getUnallocatedBudget(income, expense, goal))
    }
    if (this.state.frequency === 'Annually') {
      return h.getUnallocatedBudget(income, expense, goal)
    }
  }

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  // getColor = (ratioOfCompletion) => {
  //   return `rgba(${90},${3},${252},${ratioOfCompletion})`
  // }

  render () {
    return (
      <div className="budgetCardMain">
        <div className="topCardComponent">
          <div className="topCardWrapper">
            <div className="budgetRow">
              <div className="colLeft">
                < h2 style={{ color: 'white' }}>
                Frequency
                </h2>
              </div>
              <div className="colRight">
                <Dropdown
                  placeholder="frequency"
                  selection
                  onChange={this.onChange}
                  name="frequency"
                  value={this.state.frequency}
                  options={options}
                />
              </div>
            </div>
            <hr style={{ marginBottom: '20px' }} />

            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}>Total Budget:</h2>
              </div>
              <div className="colRight">
                <h2 style={{ color: 'white' }}>
                  {addCommas(this.renderTotalBudget())}
                </h2>
              </div>
            </div>
            <hr style={{ marginBottom: '20px' }} />

            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}>Total Contribution:</h2>
              </div>
              <div className="colRight">
                <h2 style={{ color: 'white' }}>
                  {addCommas(this.renderTotalContribution())}
                </h2>
              </div>
            </div>
            <hr style={{ marginBottom: '20px' }} />

            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}>Un-Allocated Budget:</h2>
              </div>
              <div className="colRight">
                <h2 style={{ color: 'white' }}>
                  {addCommas(this.renderUnallocatedBudget(), false)}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="budgetGraphs">
          {this.props.goal && this.props.goal.length > 0 && <h1>Goals Overview</h1>}

          <Fragment>
            {this.props.goal.map((item, index) => <BudgetCell key={item.id} item={item} />)}
          </Fragment>
        </div>
      </div>
    )
  }
}

export default BudgetCard
