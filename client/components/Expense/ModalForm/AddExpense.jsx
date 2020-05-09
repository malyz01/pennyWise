import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { addUserExpense } from '../../../store/actions/expense'
import {
  setModalExpenseOpen,
  setModalExpenseForm
} from '../../../store/actions/modal'

export class Login extends Component {
  state = {
    categories: '',
    expenseName: '',
    expenseAmount: '',
    frequency: ''
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    await this.props.addUserExpense(this.props.userId, this.state)
    this.props.setModalExpenseOpen(false)
    this.props.setModalExpenseForm('')
  }

  render () {
    const { categories, expenseName, expenseAmount, frequency } = this.state
    return (
      <div className="expenseModalFormContainer">
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Field>
            <Form.Input
              value={categories}
              onChange={this.handleOnChange}
              name="categories"
              type="text"
              placeholder="categories"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={expenseName}
              onChange={this.handleOnChange}
              name="expenseName"
              type="text"
              placeholder="expenseName"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={expenseAmount}
              onChange={this.handleOnChange}
              name="expenseAmount"
              type="text"
              placeholder="expenseAmount"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={frequency}
              onChange={this.handleOnChange}
              name="frequency"
              type="text"
              placeholder="frequency"
            />
          </Form.Field>
          <Button className="submitBtn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id
})

const mapDispatchToProps = {
  setModalExpenseOpen,
  setModalExpenseForm,
  addUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
