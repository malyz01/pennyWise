import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class MenuBtn extends Component {
  render () {
    return (
      <div>
        <Button size='large' className='signupBtn'>SIGN UP</Button>
        <Button size='large' className='loginBtn'>LOGIN</Button>
      </div>
    )
  }
}

export default withRouter(MenuBtn)
