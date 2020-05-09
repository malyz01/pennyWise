import React, { Component } from 'react'
import './budget.css'

export class BudgetCard extends Component {
  render () {
    return (
      <div className='topCardComponent'>
        <h2>Frequency:</h2>
        <h2>Total Budget:</h2>
        <h2>Allocated Budget:</h2>
        <h2>un-Allocated Budget:</h2>
      </div>
    )
  }
}

export default BudgetCard
