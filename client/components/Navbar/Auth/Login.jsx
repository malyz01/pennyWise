import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { authUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Login extends Component {
  state = {
    email: '',
    password: '',
    emailError: false,
    passwordError: false
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })

    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if (re.test(this.state.email)) {
      this.setState({ emailError: true })
    } else {
      this.setState({ emailError: false })
    }

    if (this.state.password.length >= 3) {
      this.setState({ passwordError: true })
    } else {
      this.setState({ passwordError: false })
    }
  }

  handleOnSubmit = () => {
    this.props.authUser(this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { email, password } = this.state
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Field>
          <Form.Input
            value={email}
            onChange={this.handleOnChange}
            name='email'
            type='text'
            placeholder='email'
            error={this.state.emailError}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            value={password}
            onChange={this.handleOnChange}
            name='password'
            type='password'
            placeholder='password'
            error={this.state.passwordError}
          />
        </Form.Field>
        <Button
          className='submitBtn'
          type='submit'
          disabled={!this.state.emailError || !this.state.passwordError}
        >
          Submit
        </Button>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  authUser
}

export default connect(null, mapDispatchToProps)(Login)
