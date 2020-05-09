import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './goalModal.css'

import AddGoal from './AddGoal'
import UpdateGoal from './UpdateGoal'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

export class ModalExpenseForm extends Component {
  close = () => {
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { form, open } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <Modal.Content className="goalModalMainContainer">
          {form === 'Add Goal' && <AddGoal />}
          {form === 'Update Goal' && <UpdateGoal />}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.modal.form,
  open: state.modal.open
})

export default connect(mapStateToProps, { setModalOpen, setModalName })(ModalExpenseForm)
