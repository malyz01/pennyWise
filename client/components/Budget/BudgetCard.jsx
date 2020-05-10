import React, { Component } from 'react'
import './budget.css'

import { connect } from 'react-redux'

export class BudgetCard extends Component {
  render () {
    return (
      <div className='topCardComponent'>
        <div className="topCardWrapper">
          <div clasName="headingColumn">
            <h2 style={{ color: 'white' }}>Frequency:</h2>
            <hr className="line"/>
            <h2 style={{ color: 'white' }}>Total Budget:</h2>
            <hr className="line"/>
            <h2 style={{ color: 'white' }}> Allocated Budget:</h2>
            <hr className="line"/>
            <h2 style={{ color: 'white' }}>Un-Allocated Budget:</h2>
          </div>
          <div className="amountColumn">
            <h2 style={{ color: 'white' }}>Per Week</h2>
            <h2 style={{ color: 'white' }}>$0.50</h2>
            <h2 style={{ color: 'white' }}>$0.10</h2>
            <h2 style={{ color: 'white' }}>$0.65</h2>
            <h2 style={{ color: 'white' }}>50%</h2>

          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   userId:

// })

// const mapDispatchToProps = {
//   getUserBudget
// }

export default connect()(BudgetCard)
