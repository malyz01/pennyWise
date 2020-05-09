import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './goalModal.css'

import AddGoal from './AddGoal'
import UpdateGoal from './UpdateGoal'
import { setModal } from '../../../../store/actions/modal'

export class ModalExpenseForm extends Component {
  close = () => {
    this.props.setModal(null, false)
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

export default connect(mapStateToProps, { setModal })(ModalExpenseForm)
