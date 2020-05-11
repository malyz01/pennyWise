import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { updateUserIncome } from '../../../store/actions/income'
import { setModalOpen, setModalName } from '../../../store/actions/modal'
import './incomeModal.css'

const category = [
  { key: 'p', text: 'Primary', value: 'Primary' },
  { key: 's', text: 'Secondary', value: 'Secondary' }
]
const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'a', text: 'Annually', value: 'Annually' }
]

export class Login extends Component {
  state = {
    incomeType: this.props.select.incomeType,
    incomeName: this.props.select.incomeName,
    incomeAmount: this.props.select.incomeAmount,
    frequency: this.props.select.frequency
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    await this.props.updateUserIncome(this.props.select.id, this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { incomeType, incomeName, incomeAmount, frequency } = this.state
    return (
      <div className='incomeModalFormContainer'>
        <div className='incomeModalHeader'>{this.props.form}</div>
        <div className='divider' />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <Form.Select
            options={category}
            name='incomeType'
            defaultValue={incomeType}
            onChange={this.handleOnChange}
            placeholder='incomeType'
          />
          <Form.Field>
            <Form.Input
              value={incomeName}
              onChange={this.handleOnChange}
              name='incomeName'
              type='text'
              placeholder='income name'
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={incomeAmount}
              onChange={this.handleOnChange}
              name='incomeAmount'
              type='text'
              placeholder='income amount'
            />
          </Form.Field>
          <Form.Select
            options={options}
            name='frequency'
            defaultValue={frequency}
            onChange={this.handleOnChange}
            placeholder='frequency'
          />
          <Button className='submitBtn' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  form: state.modal.name,
  select: state.income.selected
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
