import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import './auth.css'

class Auth extends Component {
  state = {
    email: '',
    password: ''
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render () {
    const { email, password } = this.state
    return (
      <div className='authMainContainer'>
        <div className='authFormContainer'>
          <div className='authHeader'>SIGN IN</div>
          <div className='divider'></div>
          <Form>
            <Form.Field>
              <Form.Input value={email} onChange={this.handleOnChange} name='email' type='text' placeholder='email' />
            </Form.Field>
            <Form.Field>
              <Form.Input value={password} onChange={this.handleOnChange} name='password' type='password' placeholder='password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>

        </div>
      </div>
    )
  }
}

export default Auth
