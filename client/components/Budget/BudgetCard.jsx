import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './budget.css'

import h from './helper'

const options = [
  { key: 'w', value: 'Weekly', text: 'Weekly' },
  { key: 'm', value: 'Monthly', text: 'Monthly' },
  { key: 'a', value: 'Annually', text: 'Annually' }
]

class BudgetCard extends Component {
  state = {
    frequency: 'Weekly'
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
      return goal && goal.length > 0 && h.ctw(h.getTotalContribution(goal))
    }
    if (this.state.frequency === 'Monthly') {
      return goal && goal.length > 0 && h.ctm(h.getTotalContribution(goal))
    }
    if (this.state.frequency === 'Annually') {
      return goal && goal.length > 0 && h.getTotalContribution(goal)
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
  
  getColor = () => {
    const getRandom = () => {
      return Math.floor(Math.random() * 255)
    }
    return `rgb(${getRandom()},${getRandom()},${getRandom()})`
  }
  
  render () {
    return (
      <div className = "budgetCardMain">
        <div className="topCardComponent">
          <div className="topCardWrapper">
            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}>Frequency</h2>
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
                $ {this.renderTotalBudget()}
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
                $ {this.renderTotalContribution()}
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
                $ {this.renderUnallocatedBudget()}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className = "budgetGraphs">
          {
            [1, 2, 3, 4, 5].map((item, index) => {
              return (
                <>
              <div key={item} className = "budgetGraphRow">
                <div className = "budgetGraphLabel">
                  <p>Lucas new runescape account</p>
                </div>

                <div className = "budgetGraphBar" style={{ background: this.getColor }}>

                </div>

              </div>
              {index < 4 && <hr/>}
              </>)
            })
          }

        </div>
      </div>

    )
  }
}

export default BudgetCard
