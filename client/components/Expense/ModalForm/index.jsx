import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './expenseModal.css'

import AddExpense from './AddExpense'
import UpdateExpense from './UpdateExpense'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class ModalExpenseForm extends Component {
  close = () => {
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { open, form } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <Modal.Content className="expenseModalMainContainer">
          {form === 'Add Expense' && (<AddExpense />)}
          {form === 'Update Expense' && <UpdateExpense />}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.modal.name,
  open: state.modal.open
})

export default connect(mapStateToProps, { setModalOpen, setModalName })(ModalExpenseForm)
