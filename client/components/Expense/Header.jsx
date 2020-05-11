import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './expense.css'

import { setModalOpen, setModalName } from '../../store/actions/modal'
import { updateUserExpense, deleteUserExpense } from '../../store/actions/expense'

class Header extends Component {
  handleOnClick = action => () => {
    const { updateUserExpense, deleteUserExpense, selected } = this.props
    if (action === 'Add Expense' || action === 'Update Expense') {
      this.props.setModalName(action)
      this.props.setModalOpen(true)
    }
    if (action === 'active') {
      selected.active = !selected.active
      updateUserExpense(selected.id, selected)
    }
    if (action === 'delete') deleteUserExpense(selected.id)
  }

  render () {
    return (
      <Container className="expenseHeader">
        <div className="expenseHeaderTitle">OVERVIEW OF EXPENSES</div>
        <hr />
        <div className="expenseHeaderText">
          an overview of your expenses done right
        </div>
        <div className="expenseButtons">
          <button
            onClick={this.handleOnClick('Add Expense')}
            className="ui button add expenseAdd"
          >
            ADD EXPENSE
          </button>
          {this.props.selected && (
            <>
              <button
                onClick={this.handleOnClick('active')}
                className="on ui button  expenseAdd"
              >
                ON/OFF
              </button>
              <button
                onClick={this.handleOnClick('Update Expense')}
                className="ui button expenseAdd">
                UPDATE
              </button>
              <button
                onClick={this.handleOnClick('delete')}
                className="ui button  expenseAdd"
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
  selected: state.expense.selected
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserExpense,
  deleteUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
