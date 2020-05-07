import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import './auth.css'

import Login from './Login'
import Signup from './Signup'
import { setModalAuthOpen, setModalAuthForm } from '../../../store/actions/modal'

class Auth extends Component {
  close = () => {
    this.props.setModalAuthOpen(false)
    this.props.setModalAuthForm('')
  }

  render () {
    const { open, modal } = this.props
    return (
      <Modal open={open} onClose={this.close}>
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
  modal: state.modal.auth.form,
  open: state.modal.auth.open
})

const mapDispatchToProps = {
  setModalAuthOpen,
  setModalAuthForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
