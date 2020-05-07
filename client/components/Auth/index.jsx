import React, { Component } from 'react'
import './auth.css'

import Login from './Login'
import Signup from './Signup

class Auth extends Component {
  render () {
    return (
      <div className='authMainContainer'>
        <div className='authFormContainer'>
          <div className='authHeader'>SIGN IN</div>
          <div className='divider'></div>
          <Login />
        </div>
      </div>
    )
  }
}

export default Auth
