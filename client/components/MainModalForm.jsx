import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'

import Login from './Navbar/Auth/Login'
import Signup from './Navbar/Auth/Signup'
import UpdateProfile from './Profile/ModalForm'
import AddIncome from './Income/ModalForm/AddIncome'
import UpdateIncome from './Income/ModalForm/UpdateIncome'
import AddExpense from './Expense/ModalForm/AddExpense'
import UpdateExpense from './Expense/ModalForm/UpdateExpense'
import AddGoal from './Budget/Goals/ModalForm/AddGoal'
import UpdateGoal from './Budget/Goals/ModalForm/UpdateGoal'
import { setModalOpen, setModalName } from '../store/actions/modal'

class Auth extends Component {
  close = () => {
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { open, modal } = this.props
    return (
      <Modal
        className="modalMainContainer"
        open={open}
        onClose={this.close}
        closeIcon
      >
        <Fade>
          <Modal.Content className="modalContentContainer">
            {modal === 'signup' && <Signup />}
            {modal === 'login' && <Login />}
            {modal === 'Update Profile' && <UpdateProfile />}
            {modal === 'Add Income' && <AddIncome />}
            {modal === 'Update Income' && <UpdateIncome />}
            {modal === 'Add Expense' && <AddExpense />}
            {modal === 'Update Expense' && <UpdateExpense />}
            {modal === 'Add Goal' && <AddGoal />}
            {modal === 'Update Goal' && <UpdateGoal />}
          </Modal.Content>
        </Fade>
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
