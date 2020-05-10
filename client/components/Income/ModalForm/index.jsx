import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './incomeModal.css'

import AddIncome from './AddIncome'
import UpdateIncome from './UpdateIncome'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class ModalIncomeForm extends Component {
  close = () => {
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { open, modal } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <Modal.Content className='incomeModalMainContainer'>
          {modal === 'Add Income' && <AddIncome />}
          {modal === 'Update Income' && <UpdateIncome />}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal.name,
  open: state.modal.open
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalIncomeForm)
