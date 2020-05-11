import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import './income.css'
import { setModalName, setModalOpen } from '../../store/actions/modal'
import { updateUserIncome, deleteUserIncome } from '../../store/actions/income'

class Header extends Component {
  handleOnClick = action => () => {
    const { updateUserIncome, deleteUserIncome, selected } = this.props
    if (action === 'Add Income' || action === 'Update Income') {
      this.props.setModalName(action)
      this.props.setModalOpen(true)
    }
    if (action === 'active') {
      selected.active = !selected.active
      updateUserIncome(selected.id, selected)
    }
    if (action === 'delete') deleteUserIncome(selected.id)
  }

  render () {
    return (
      <Container className='incomeHeader'>
        <div className='incomeHeaderTitle'>OVERVIEW OF INCOME</div>
        <hr />
        <div className='incomeButtons'>
          <button
            onClick={this.handleOnClick('Add Income')}
            className='ui button add incomeAdd'
          >
            ADD INCOME
          </button>
          {this.props.selected && (
            <>
              <button
                onClick={this.handleOnClick('active')}
                className='ui button  incomeAdd'
              >
                ON/OFF
              </button>
              <button
                onClick={this.handleOnClick('Update Income')}
                className='ui button incomeAdd'
              >
                UPDATE
              </button>
              <button
                onClick={this.handleOnClick('delete')}
                className='ui button  incomeAdd'
              >
                DELETE
              </button>
            </>
          )}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.income.selected
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserIncome,
  deleteUserIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
