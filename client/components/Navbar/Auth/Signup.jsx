import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import './auth.css'
import Input from '../../FormComponents/Input'
import { newUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Signup extends Component {
  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = () => {
    this.props.newUser(this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { email, password, confirmPassword, fullName } = this.state
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          fullName: ''
        }}
        onSubmit={this.handleOnSubmit}
        validationSchema={SignupSchema}
      >
        <Form onSubmit={this.handleOnSubmit}>
          <Field
            requirede
            name="fullName"
            type="text"
            placeholder="full name"
            component={Input}
          />
          <ErrorMessage name="fullName" />
          <Field
            name="email"
            type="text"
            placeholder="email"
            component={Input}
          />
          <ErrorMessage name="email" />
          <Field
            name="password"
            type="password"
            placeholder="password"
            component={Input}
          />
          <ErrorMessage name="password" />
          <Field
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            component={Input}
          />
          <ErrorMessage name="confirmPassword" />
          <Button className="submitBtn" type="submit">
          Submit
          </Button>
        </Form>
      </Formik>
    )
  }
}

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  newUser
}

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm Password is required')
})

export default connect(null, mapDispatchToProps)(Signup)
