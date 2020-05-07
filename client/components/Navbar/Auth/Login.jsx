import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { authUser } from '../../../store/actions/auth'
import { setModalAuthOpen, setModalAuthForm } from '../../../store/actions/modal'

export class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = () => {
    this.props.authUser(this.state)
    this.props.setModalAuthOpen(false)
    this.props.setModalAuthForm('')
  }

  render () {
    const { email, password } = this.state
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Field>
          <Form.Input value={email} onChange={this.handleOnChange} name='email' type='text' placeholder='email' />
        </Form.Field>
        <Form.Field>
          <Form.Input value={password} onChange={this.handleOnChange} name='password' type='password' placeholder='password' />
        </Form.Field>
        <Button className='authBtn' type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  setModalAuthOpen,
  setModalAuthForm,
  authUser
}

export default connect(null, mapDispatchToProps)(Login)
