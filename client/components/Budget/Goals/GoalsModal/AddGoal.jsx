import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './goalModal.css'

import { addUserGoal } from '../../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'y', text: 'Yearly', value: 'Yearly' }
]

export class Login extends Component {
  state = {
    goalName: '',
    targetBudget: 0,
    currentAmount: 0,
    frequency: 'Weekly',
    targetDate: '',
    budgetDistribution: 0
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    await this.props.addUserGoal(this.props.userId, this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const {
      goalName,
      targetBudget,
      currentAmount,
      targetDate,
      budgetDistribution
    } = this.state
    return (
      <div className="goalModalFormContainer">
        <div className="goalModalHeader">{this.props.form}</div>
        <div className="divider" />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <Form.Field>
            <Form.Input
              value={goalName}
              onChange={this.handleOnChange}
              name="goalName"
              type="text"
              placeholder="goal name"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={targetBudget}
              onChange={this.handleOnChange}
              name="goalAmount"
              type="text"
              placeholder="goal amount"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={currentAmount}
              onChange={this.handleOnChange}
              name="goalAmount"
              type="text"
              placeholder="current amount"
            />
          </Form.Field>
          <Form.Select
            options={options}
            name="frequency"
            onChange={this.handleOnChange}
            placeholder="frequency"
          />
          <Form.Field>
            <Form.Input
              value={targetDate}
              onChange={this.handleOnChange}
              name="goalAmount"
              type="text"
              placeholder="target date"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={budgetDistribution}
              onChange={this.handleOnChange}
              name="budgetDistribution"
              type="text"
              placeholder="budget distribution"
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

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  form: state.modal.goal.form
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  addUserGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
