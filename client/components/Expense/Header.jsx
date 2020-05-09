import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import './expense.css'

import {
  setModalExpenseForm,
  setModalExpenseOpen
} from '../../store/actions/modal'

class Header extends Component {
  handleOnClick = action => () => {
    const { setModalExpenseForm, setModalExpenseOpen } = this.props
    if (action === 'Add Expense' || action === 'Update Expense') {
      setModalExpenseForm(action)
      setModalExpenseOpen(true)
    }
  }

  render () {
    return (
      <Container className='expenseHeader'>
        <div className='expenseHeaderTitle'>OVERVIEW OF EXPENSES</div>
        <hr />
        <div className='expenseHeaderText'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cumque
          exercitationem sequi expedita cupiditate error nam laudantium ut quo
          quasi rerum eaque fuga odit, laborum facilis mollitia impedit dolore
          corporis!
        </div>
        <div className='expenseButtons'>
          <button
            onClick={this.handleOnClick('Add Expense')}
            className='ui button add expenseAdd'
          >
            ADD EXPENSE
          </button>
          <button className='ui button  expenseAdd'>ON/OFF</button>
          <button
            onClick={this.handleOnClick('Update Expense')}
            className='ui button expenseAdd'
          >
            UPDATE
          </button>
          <button className='ui button  expenseAdd'>DELETE</button>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setModalExpenseOpen,
  setModalExpenseForm
}

export default connect(null, mapDispatchToProps)(Header)
