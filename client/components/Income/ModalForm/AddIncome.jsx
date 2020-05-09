import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './modal.css'

import { addUserIncome } from '../../../store/actions/income'
import {
  setModalIncomeOpen,
  setModalIncomeForm
} from '../../../store/actions/modal'

const incomeType = [
  { key: 'p', text: 'Primary', value: 'Primary' },
  { key: 's', text: 'Secondary', value: 'Secondary' }
]
const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'y', text: 'Yearly', value: 'Yearly' }
]

export class Login extends Component {
  state = {
    incomeType: '',
    incomeName: '',
    incomeAmount: '',
    frequency: ''
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    await this.props.addUserIncome(this.props.userId, this.state)
    this.props.setModalIncomeOpen(false)
    this.props.setModalIncomeForm('')
  }

  render () {
    const { incomeName, incomeAmount } = this.state
    return (
      <div className='incomeModalFormContainer'>
        <div className='incomeModalHeader'>{this.props.form}</div>
        <div className='divider' />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <Form.Select
            options={incomeType}
            name='incomeType'
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
  userId: state.auth.user.id,
  form: state.modal.income.form
})

const mapDispatchToProps = {
  setModalIncomeOpen,
  setModalIncomeForm,
  addUserIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)