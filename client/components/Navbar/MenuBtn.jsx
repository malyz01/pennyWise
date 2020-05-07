import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { logout } from '../../store/actions/auth'
import { setModalAuthForm, setModalAuthOpen } from '../../store/actions/modal'

class MenuBtn extends Component {
handleOnClick = (route) => () => {
  this.props.setModalAuthForm(route)
  this.props.setModalAuthOpen(true)
}

render () {
  const { authenticated } = this.props
  return (
    <div>
      {!authenticated
        ? <>
          <Button onClick={this.handleOnClick('signup')} size='large' className='signupBtn'>SIGN UP</Button>
          <Button onClick={this.handleOnClick('login')} size='large' className='loginBtn'>LOGIN</Button>
        </>
        : <Button onClick={() => this.props.logout()}>Logout</Button>
      }

    </div>
  )
}
}

const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

const mapDispatchToProps = {
  setModalAuthOpen,
  setModalAuthForm,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuBtn))
