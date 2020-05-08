import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './profile.css'

class BottomDetailsCardComponent extends React.Component {
  render () {
    return (
      <div className='bottomCardDetailsContainer'>

        <div className='bottomButtonContainer'>

          <Link className="ui right labeled icon button">
            <i className="right arrow icon"></i>
                manage your income
          </Link>

          <Link className="ui right labeled icon button">
            <i className="right arrow icon"></i>
                manage your expenses
          </Link>

          <Link className="ui right labeled icon button">
            <i className="right arrow icon"></i>
                manage your budget
          </Link>

          <Link className="ui right labeled icon button">
            <i className="right arrow icon"></i>
                manage your goals
          </Link>
        </div>
        <div className='totalDisplayContainer'>
          <h1 className='totalDisplayTitle'>An Overview of your Finances</h1>
          <div className='totalDisplayBox'>

            <div className='totalOverview'>
              <p>Total Income</p>
              <p>Total Expenses</p>
              <p>Total Budget</p>
              <p>Total Goals</p>
            </div>
            <div className='moneyOverview'>
              <p>$1,000,000</p>
              <p>$999,999</p>
              <p>$1 per week</p>
              <p>10</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect()(BottomDetailsCardComponent)
