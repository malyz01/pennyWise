import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './modal.css'

import AddIncome from './AddIncome'
import {
  setModalIncomeOpen,
  setModalIncomeForm
} from '../../../store/actions/modal'

export class ModalIncomeForm extends Component {
  close = () => {
    this.props.setModalIncomeOpen(false)
    this.props.setModalIncomeForm('')
  }

  render () {
    const { open, modal } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <Modal.Content className='incomeModalMainContainer'>
          {modal === 'Add Income' && <AddIncome />}
          {modal === 'Update Income' && 'Update income form'}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal.income.form,
  open: state.modal.income.open
})

const mapDispatchToProps = {
  setModalIncomeOpen,
  setModalIncomeForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalIncomeForm)
