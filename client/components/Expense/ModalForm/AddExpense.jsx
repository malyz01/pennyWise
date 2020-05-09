import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './expenseModal.css'

import { addUserExpense } from '../../../store/actions/expense'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

const category = [
  { key: 'e', text: 'Essential', value: 'Essential' },
  { key: 'n', text: 'Non-Essential', value: 'Non-Essential' }
]
const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'y', text: 'Yearly', value: 'Yearly' }
]

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
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { expenseName, expenseAmount } = this.state
    return (
      <div className="expenseModalFormContainer">
        <div className="expenseModalHeader">{this.props.form}</div>
        <div className="divider" />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <Form.Select
            options={category}
            name="categories"
            onChange={this.handleOnChange}
            placeholder="categories"
          />
          <Form.Field>
            <Form.Input
              value={expenseName}
              onChange={this.handleOnChange}
              name="expenseName"
              type="text"
              placeholder="expense name"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={expenseAmount}
              onChange={this.handleOnChange}
              name="expenseAmount"
              type="text"
              placeholder="expense amount"
            />
          </Form.Field>
          <Form.Select
            options={options}
            name="frequency"
            onChange={this.handleOnChange}
            placeholder="frequency"
          />
          <Button className="submitBtn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  form: state.modal.expense.form
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  addUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
