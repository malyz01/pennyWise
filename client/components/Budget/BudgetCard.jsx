import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './budget.css'
import { connect } from 'react-redux'
import h from './helper'

const options = [
  { key: 'w', value: 'Weekly', text: 'Weekly' },
  { key: 'm', value: 'Monthly', text: 'Monthly' },
  { key: 'a', value: 'Annually', text: 'Annually' }
]
let count = 0
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
  getColor = (number) => {
    const getShade = (minR, minB, minG, maxR, maxB, maxG) => {
      return `rgb(${Math.floor(Math.random() * (maxR - minR) + minR)},${Math.floor((Math.random() * (maxB - minB) + minB))},${Math.floor((Math.random() * (maxG - minG) + minG))})`
    }
    const getWhite = (min, max) => {
      const shade = Math.floor(Math.random() * (max - min) + min)
      return `rgb(${shade},${shade},${shade})`
    }
    switch (number) {
      case 0:
        count++
        return '#9d00e6'
      case 1:
        count++
        return '#c64dff'
      case 2:
        count++
        return '#cd7eb8'
      case 3:
        count = 0
        return '#9326ff'
    }
  }
  render () {
    console.log('goals', this.props.goal)
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
        <div className="budgetGraphs">
          {
            this.props.goal.map((item, index) => {
              return (
                <>
                  <div key={item.id} className="budgetGraphRow">
                    <div className="budgetGraphLabel">
                      <p>{item.goalName}</p>
                    </div>

                    <div className="budgetGraphBar" style={{
                      background: this.getColor(count),
                      // width: '50%'
                      width: `${item.currentAmount / item.targetBudget * 100}%`
                    }}>

                    </div>

                  </div>
                  {index < this.props.goal.length - 1 && <hr />}
                </>)
            })
          }

        </div>
      </div>

    )
  }
}

export default BudgetCard
