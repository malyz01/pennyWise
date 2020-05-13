import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './goalModal.css'

import Input from '../../../FormComponents/Input'
import Dropdown from '../../../FormComponents/Dropdown'
import { addUserGoal } from '../../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../../store/actions/modal'

const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'a', text: 'Annually', value: 'Annually' }
]

class Login extends Component {
  handleOnSubmit = async values => {
    if (values.budgetDistribution > values.targetBudget - values.currentAmount) {
      values.budgetDistribution = values.targetBudget - values.currentAmount
    }
    await this.props.addUserGoal(this.props.userId, values)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    return (
      <Formik
        initialValues={{
          goalName: '',
          targetBudget: '',
          currentAmount: '',
          frequency: 'Weekly',
          targetDate: '',
          budgetDistribution: ''
        }}
        onSubmit={this.handleOnSubmit}
        validationSchema={AddGoalSchema}
      >
        <Form>
          <div className='modalGoalMainContainer'>
            <div className='modalGoalHeader'>{this.props.form}</div>
            <div className='divider' />
            <Field
              title='Name'
              name='goalName'
              type='text'
              component={Input}
              placeholder='goal name'
            />
            <Field
              title='Target Budget Goal'
              name='targetBudget'
              type='number'
              component={Input}
              placeholder='target budget goal'
            />
            <Field
              title='Current Amount'
              name='currentAmount'
              type='number'
              component={Input}
              placeholder='current amount'
            />
            <Field
              title='Target Date'
              name='targetDate'
              type='date'
              component={Input}
              placeholder='target date'
            />
            <div className='modalErrorDiv'>
              <ErrorMessage name='targetDate' />
            </div>
            <Field
              title='Budget Contribution'
              name='budgetDistribution'
              type='number'
              component={Input}
              placeholder='budget contribution'
            />
            <Field
              title='Frequency'
              options={options}
              name='frequency'
              component={Dropdown}
            />
            <Button className='submitBtn' type='submit'>
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
  addUserGoal
}

const AddGoalSchema = yup.object().shape({
  targetDate: yup.date().required('Please choose a date')
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
