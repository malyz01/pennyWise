import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './goalModal.css'

import { addUserGoal } from '../../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

export class Login extends Component {
  state = {
    goalName: '',
    targetBudget: '',
    currentAmount: '',
    targetDate: ''
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
      targetDate
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
              required
              type="text"
              placeholder="goal name"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={targetBudget}
              onChange={this.handleOnChange}
              name="targetBudget"
              required
              type="number"
              placeholder="goal amount"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={currentAmount}
              onChange={this.handleOnChange}
              name="currentAmount"
              required
              type="number"
              placeholder="current amount"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={targetDate}
              onChange={this.handleOnChange}
              name="targetDate"
              required
              type="date"
              placeholder="target date"
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
  form: state.modal.name
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  addUserGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
