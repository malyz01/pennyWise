import React, { Component } from 'react'
import './budget.css'

export class BudgetCard extends Component {
  render() {
    return (
      <div className='topCardComponent'>
        <div className="topCardWrapper">
          <div className="budgetRow">
            <div className="colLeft">
              <h2 style={{ color: 'white' }}>Frequency:</h2>
            </div>
            <div className="colRight">
              <h2 style={{ color: 'white' }}>$0.50</h2>
            </div>
          </div>
          <hr style={{ marginBottom: '20px' }} />
          <div className="budgetRow">
            <div className="colLeft">
              <h2 style={{ color: 'white' }}>Total Budget:</h2>
            </div>
            <div className="colRight">

              <h2 style={{ color: 'white' }}>$0.50</h2>
            </div>
          </div>
          <hr style={{ marginBottom: '20px' }} />
          <div className="budgetRow">
            <div className="colLeft">
              <h2 style={{ color: 'white' }}> Allocated Budget:</h2>
            </div>
            <div className="colRight">

              <h2 style={{ color: 'white' }}>$0.50</h2>
            </div>
          </div>
          <hr style={{ marginBottom: '20px' }} />
          <div className="budgetRow">
            <div className="colLeft">
              <h2 style={{ color: 'white' }}>Un-Allocated Budget:</h2>
            </div>
            <div className="colRight">

              <h2 style={{ color: 'white' }}>$0.50</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BudgetCard
