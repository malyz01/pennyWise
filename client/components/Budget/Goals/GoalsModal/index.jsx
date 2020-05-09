import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './modal.css'

import AddGoal from './AddGoal'
import UpdateGoal from './UpdateGoal'
import {
  setModalGoalOpen,
  setModalGoalForm
} from '../../../store/actions/modal'

export class ModalExpenseForm extends Component {
  close = () => {
    this.props.setModalGoalOpen(false)
    this.props.setModalGoalForm('')
  }

  render() {
    const { open, modal } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <Modal.Content className="expenseModalMainContainer">
          {modal === 'Add Goal' && <AddGoal />}
          {modal === 'Update Goal' && <UpdateGoal />}
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
  setModalGoalOpen,
  setModalGoalForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalExpenseForm)
