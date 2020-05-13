import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='budgetMainContainer'>
        <div className='budgetHeaderContainer'>
          <div className="budgetHeader">YOUR BUDGET SUMMARY</div>
          <hr className="titles"/>
          <p className="budgetPTags">Making a plan to get through.</p>
          <p className="budgetPTags">Give each of your hard-earned dollars a job to do using Pennywise's budgeting tool.</p>
        </div>

        <div className='budgetCardContainer'>
          <div className='diagonalBG'></div>
          <div className='solidBG'>
          </div>
        </div>

      </div>

    </div>
  )
}
export default Header
