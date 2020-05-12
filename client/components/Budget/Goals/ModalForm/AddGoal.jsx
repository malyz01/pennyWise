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

export class Login extends Component {
  handleOnSubmit = async values => {
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
              title='Target budget'
              name='targetBudget'
              type='number'
              component={Input}
              placeholder='target budget'
            />
            <Field
              title='Current amount'
              name='currentAmount'
              type='number'
              component={Input}
              placeholder='current amount'
            />
            <Field
              title='Target date'
              name='targetDate'
              type='date'
              component={Input}
              placeholder='target date'
            />
            <div className='modalErrorDiv'>
              <ErrorMessage name='targetDate' />
            </div>
            <Field
              title='Budget Distribution'
              name='budgetDistribution'
              type='number'
              component={Input}
              placeholder='budget distribution'
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
