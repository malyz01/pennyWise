import React, { Component } from 'react'
import './budget.css'
import Fade from 'react-reveal/Fade'

import h from './helper'

class BudgetCard extends Component {
  render () {
    const { income, expense, goal } = this.props
    return (
      <Fade>
        <div className="topCardComponent">
          <div className="topCardWrapper">
            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}>Frequency</h2>
              </div>
              <div className="colRight">
                <select name="frequency" id="">
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>
            <hr style={{ marginBottom: '20px' }} />
  
            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}>Total Budget:</h2>
              </div>
              <div className="colRight">
                <h2 style={{ color: 'white' }}>
                  $ {h.ctw(h.getTotalBudget(income, expense))}
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
                  ${' '}
                  {goal && goal.length > 0 && h.ctw(h.getTotalContribution(goal))}
                </h2>
              </div>
            </div>
            <hr style={{ marginBottom: '20px' }} />
  
            <div className="budgetRow">
              <div className="colLeft">
                <h2 style={{ color: 'white' }}> Un-Allocated Budget: </h2>
              </div>
              <div className="colRight">
                <h2 style={{ color: 'white' }}>
                  $ {h.ctw(h.getUnallocatedBudget(income, expense, goal))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default BudgetCard
