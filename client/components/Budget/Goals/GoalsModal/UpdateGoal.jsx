import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './goalModal.css'

import { updateUserGoal } from '../../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'y', text: 'Yearly', value: 'Yearly' }
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
  handleMoney = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleOnSubmit = async () => {
    const { currentAmount, budgetDistribution, frequency } = this.state
    await this.props.updateUserGoal(this.props.select.id, { currentAmount, budgetDistribution, frequency })
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }
  updateMoney = (type) => {
    if (type === 'add') {
      if (this.state.currentAmount + this.state.money >= 0) {
        this.setState({ currentAmount: this.state.currentAmount + Number(this.state.money) })
      }
    }
    if (type === 'subtract') {
      if (this.state.currentAmount - this.state.money >= 0) {
        this.setState({ currentAmount: this.state.currentAmount - Number(this.state.money) })
      }
    }
  }
  render () {
    const { currentAmount, budgetDistribution, frequency } = this.state
    return (
      <div className="goalModalFormContainer">
        <div className="goalModalHeader">Add Funds To Your Goal</div>
        <div className="divider" />
        <label>{`Your Current Amount is $${this.state.currentAmount}`}</label>
        <input type="number" placeholder="add money" name="money" onChange={this.handleMoney}/><button onClick={() => this.updateMoney('add')}className="ui button green">+</button>
        <button onClick={() => this.updateMoney('subtract')} className="ui button red">-</button>
        <div className="goalModalHeader">{this.props.form}</div>
        <div className="divider" />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <label>Budget Distribution</label>
          <Form.Field>

            <Form.Input
              value={budgetDistribution}
              onChange={this.handleOnChange}
              name="budgetDistribution"
              type="number"
              placeholder="budget distribution"
            />
          </Form.Field>
          <label>Frequency</label>
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
