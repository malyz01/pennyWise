import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { setModalAuthForm, setModalAuthOpen } from '../../store/actions/modal'

class MenuBtn extends Component {
handleOnClick = (route) => () => {
  this.props.setModalAuthForm(route)
  this.props.setModalAuthOpen(true)
}

render () {
  return (
    <div>
      <Button onClick={this.handleOnClick('signup')} size='large' className='signupBtn'>SIGN UP</Button>
      <Button onClick={this.handleOnClick('login')} size='large' className='loginBtn'>LOGIN</Button>
    </div>
  )
}
}

const mapDispatchToProps = {
  setModalAuthOpen,
  setModalAuthForm
}

export default connect(null, mapDispatchToProps)(withRouter(MenuBtn))
