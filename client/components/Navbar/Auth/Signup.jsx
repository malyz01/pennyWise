import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  render () {
    const { email, password, confirmPassword } = this.state
    return (
      <Form>
        <Form.Field>
          <Form.Input value={email} onChange={this.handleOnChange} name='email' type='text' placeholder='email' />
        </Form.Field>
        <Form.Field>
          <Form.Input value={password} onChange={this.handleOnChange} name='password' type='password' placeholder='password' />
        </Form.Field>
        <Form.Field>
          <Form.Input value={confirmPassword} onChange={this.handleOnChange} name='password' type='password' placeholder='confirm password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default Signup
