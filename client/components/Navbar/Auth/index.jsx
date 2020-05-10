import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './auth.css'

import Login from './Login'
import Signup from './Signup'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

class Auth extends Component {
  close = () => {
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { open, modal } = this.props
    return (
      <Modal open={open} onClose={this.close} closeIcon>
        <div className='authMainContainer'>
          <div className='authFormContainer'>
            <div className='authHeader'>{modal}</div>
            <div className='divider' />
            {modal === 'signup' && <Signup />}
            {modal === 'login' && <Login />}
          </div>
        </div>
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
