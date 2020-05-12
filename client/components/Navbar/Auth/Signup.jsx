import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './auth.css'

import { newUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = () => {
    this.props.newUser(this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { email, password, confirmPassword, fullName } = this.state
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Field>
          <Form.Input
            value={fullName}
            onChange={this.handleOnChange}
            required
            name="fullName"
            type="text"
            placeholder="full name"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            value={email}
            onChange={this.handleOnChange}
            name="email"
            type="text"
            placeholder="email"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            value={password}
            onChange={this.handleOnChange}
            name="password"
            type="password"
            placeholder="password"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            value={confirmPassword}
            onChange={this.handleOnChange}
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
          />
        </Form.Field>
        <Button className="submitBtn" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  newUser
}

export default connect(null, mapDispatchToProps)(Signup)
