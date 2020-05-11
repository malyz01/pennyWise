import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './profile.css'

import { updateUserExpense } from '../../store/actions/expense'
import { setModalOpen, setModalName } from '../../store/actions/modal'

export class Login extends Component {
  state = {
    categories: this.props.select.categories,
    expenseName: this.props.select.expenseName,
    expenseAmount: this.props.select.expenseAmount,
    frequency: this.props.select.frequency
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    await this.props.updateUserExpense(this.props.select.id, this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { categories, expenseName, expenseAmount, frequency } = this.state
    return (
      <div className="expenseModalFormContainer">
        <div className="expenseModalHeader">{this.props.form}</div>
        <div className="divider" />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <Form.Select
            options={category}
            name="categories"
            defaultValue={categories}
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
            defaultValue={frequency}
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

const mapStateToProps = (state) => ({
  form: state.modal.name,
  select: state.expense.selected
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
