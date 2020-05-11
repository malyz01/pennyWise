import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './goalModal.css'

import { updateUserGoal } from '../../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

export class UpdateGoal extends Component {
  state = {
    currentAmount: this.props.select.currentAmount,
    money: ''
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
    const { currentAmount } = this.state
    return (
      <div className="goalModalFormContainer">
        <div className="goalModalHeader">Add Funds To Your Goal</div>
        <div className="divider" />
        <Form onSubmit={this.handleOnSubmit}>
          <div style={{ display: 'block' }}>
            <label>Your Current Amount is: {currentAmount}</label>
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
