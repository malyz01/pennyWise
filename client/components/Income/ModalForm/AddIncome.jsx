import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field } from 'formik'
import './incomeModal.css'

import Input from '../../FormComponents/Input'
import Dropdown from '../../FormComponents/Dropdown'
import { addUserIncome } from '../../../store/actions/income'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

const incomeType = [
  { key: 'p', text: 'Primary', value: 'Primary' },
  { key: 's', text: 'Secondary', value: 'Secondary' }
]

const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'a', text: 'Annually', value: 'Annually' }
]

export class Login extends Component {
  handleOnSubmit = async (values) => {
    await this.props.addUserIncome(this.props.userId, values)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    return (
      <Formik
        initialValues={{
          incomeType: 'Primary',
          incomeName: '',
          incomeAmount: '',
          frequency: 'Weekly'
        }}
        onSubmit={this.handleOnSubmit}
      >
        <Form>
          <div className="modalIncomeMainContainer">
            <div className="modalIncomeHeader">{this.props.form}</div>
            <div className="divider" />
            <Field
              title="Type"
              options={incomeType}
              name="incomeType"
              component={Dropdown}
            />
            <Field
              title="Name"
              name="incomeName"
              type="text"
              component={Input}
              placeholder="income name"
            />
            <Field
              title="Amount"
              name="incomeAmount"
              type="text"
              component={Input}
              placeholder="income amount"
            />
            <Field
              title="Frequency"
              options={options}
              name="frequency"
              component={Dropdown}
            />
            <Button className="submitBtn" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  form: state.modal.name
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  addUserIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
