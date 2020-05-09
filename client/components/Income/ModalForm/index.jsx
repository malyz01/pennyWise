import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './modal.css'

import AddExpense from './AddExpense'
import { setModalExpenseOpen, setModalExpenseForm } from '../../../store/actions/modal'

export class ModalExpenseForm extends Component {
  close = () => {
    this.props.setModalExpenseOpen(false)
    this.props.setModalExpenseForm('')
  }

  render () {
    const { open, modal } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <Modal.Content className="expenseModalMainContainer">
          {modal === 'Add Expense' && (
            <AddExpense />
          )}
          {modal === 'Update Expense' && 'Update expense form'}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal.expense.form,
  open: state.modal.expense.open
})

const mapDispatchToProps = {
  setModalExpenseOpen,
  setModalExpenseForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalExpenseForm)
