import React from 'react'
import './budget.css'

class Budget extends React.Component {
  render () {
    return (
      <div className='budgetContainer'>
        <div className='budgetHeaderContainer'>
          <h1 className="budgetHeader">MANAGE YOUR BUDGETS AND SAVINGS HERE</h1>
          <div className="BudgetHeaderLine"></div>
          <div className="budgetSubHeader">

            <p className="budgetPTags">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="budgetPTags">Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</p>

          </div>
        </div>
      </div>
    )
  }
}

export default Budget
