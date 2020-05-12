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
  handleOnSubmit = (values) => {
    this.props.newUser(values)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
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
          <div className="authHeader">{this.props.modal}</div>
          <div className="divider" />
          <div className="authMainContainer">
            <div className="authSubContainer">
              <Field
                required
                name="fullName"
                type="text"
                title="Full name"
                placeholder="full name"
                component={Input}
              />
              <ErrorMessage name="fullName" />
              <Field
                required
                name="email"
                type="text"
                title="Email"
                placeholder="email"
                component={Input}
              />
              <ErrorMessage name="email" />
              <Field
                required
                name="password"
                type="password"
                title="Password"
                placeholder="password"
                component={Input}
              />
              <ErrorMessage name="password" />
              <Field
                required
                name="confirmPassword"
                type="password"
                title="Confirm Password"
                placeholder="confirm password"
                component={Input}
              />
              <ErrorMessage name="confirmPassword" />
              <Button className="submitBtn" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    )
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal.name
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
