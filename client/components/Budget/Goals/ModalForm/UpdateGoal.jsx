import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './goalModal.css'

import { updateUserGoal } from '../../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'a', text: 'Annually', value: 'Annually' }
]

export class UpdateGoal extends Component {
  state = {
    currentAmount: this.props.select.currentAmount,
    budgetDistribution: this.props.select.budgetDistribution,
    frequency: this.props.select.frequency,
    money: 0
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    const { currentAmount, budgetDistribution, frequency } = this.state
    await this.props.updateUserGoal(this.props.select.id, { currentAmount, budgetDistribution, frequency })
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  updateMoney = (type) => {
    if (type === 'add') {
      if (Number(this.state.currentAmount) + Number(this.state.money) >= 0) {
        let money = this.state.money
        if (Number(this.state.currentAmount) + Number(this.state.money) > Number(this.props.select.targetBudget)) {
          money = Number(this.props.select.targetBudget) - Number(this.state.currentAmount)
        }
        this.setState({ currentAmount: Number(this.state.currentAmount) + Number(money) })
      }
    }
    if (type === 'subtract') {
      if (Number(this.state.currentAmount) - Number(this.state.money) >= 0) {
        this.setState({ currentAmount: Number(this.state.currentAmount) - Number(this.state.money) })
      }
    }
  }
  render () {
    const { currentAmount, budgetDistribution, frequency } = this.state
    return (
      <div className="goalModalFormContainer">
        <div className="goalModalHeader">Add Funds To Your Goal</div>
        <div className="divider" />
        <Form onSubmit={this.handleOnSubmit}>
          <div style={{ display: 'block' }}>
            <label>
              Your Current Amount is: ${currentAmount} out of $
              {this.props.select.targetBudget}
            </label>
            {this.state.currentAmount === this.props.select.targetBudget && (
              <div style={{ color: '#f7d365', fontWeight: 'bold' }}>
                GOAL REACHED!
              </div>
            )}
            <div style={{ display: 'flex', margin: '1.5rem 0' }}>
              <Form.Field style={{ margin: '0 2rem 0 0' }}>
                <Form.Input
                  value={this.state.money}
                  onChange={this.handleOnChange}
                  name="money"
                  required
                  type="number"
                  placeholder="add / subtract money"
                />
              </Form.Field>
              <Button
                onClick={() => this.updateMoney('add')}
                type="button"
                circular
                size="large"
                color="teal"
                icon="add"
              />
              <Button
                onClick={() => this.updateMoney('subtract')}
                type="button"
                circular
                size="large"
                color="red"
                icon="minus"
              />
            </div>
          </div>

          <div className="goalModalHeader">{this.props.form}</div>
          <div className="divider" />
          <Form.Field>
            <div className="modalGoalLabel">Budget Distribution</div>
            <Form.Input
              value={budgetDistribution}
              onChange={this.handleOnChange}
              name="budgetDistribution"
              required
              type="number"
              placeholder="budget distribution"
            />
          </Form.Field>
          <div className="modalGoalLabel">Frequency</div>
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
  select: state.goal.selected
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGoal)
