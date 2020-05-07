import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import './auth.css'

class index extends Component {
  state = {
    email: '',
    password: ''
  }

  handleOnSubmit = (e, data) => {
    console.log(e)
  }

  render () {
    return (
      <div>
        <Form onSubmit={}>
          <div>SIGN IN</div>
          <Form.Field>
            <Input onChange={this.handleOnChange} type='text' placeholder='email' />
          </Form.Field>
          <Form.Field>
            <Input onChange={this.handleOnChange} type='password' placeholder='password' />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default index
