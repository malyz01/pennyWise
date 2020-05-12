import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Button } from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './auth.css'

import Input from '../../FormComponents/Input'
import { newUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Signup extends Component {
  state = {
    error: null
  }

  handleOnSubmit = async (values) => {
    try {
      await this.props.newUser(values)
      this.props.setModalOpen(false)
      this.props.setModalName(null)
    } catch (err) {
      this.setState({ error: err.message })
    }
  }

  render () {
    return (
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={this.handleOnSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <div className="authMainContainer">
            <div className="authHeader">{this.props.modal}</div>
            <div className="divider" />
            {this.state.error && (
              <div className="modalErrorContainerMsg">
                <Message negative>
                  <Message.Header>{this.state.error}</Message.Header>
                </Message>
              </div>
            )}

            <Field
              name="fullName"
              type="text"
              title="Full name"
              placeholder="full name"
              component={Input}
            />
            <div className="modalErrorDiv">
              <ErrorMessage name="fullName" />
            </div>
            <Field
              name="email"
              type="text"
              title="Email"
              placeholder="email"
              component={Input}
            />
            <div className="modalErrorDiv">
              <ErrorMessage name="email" />
            </div>
            <Field
              name="password"
              type="password"
              title="Password"
              placeholder="password"
              component={Input}
            />
            <div className="modalErrorDiv">
              <ErrorMessage name="password" />
            </div>
            <Field
              name="confirmPassword"
              type="password"
              title="Confirm Password"
              placeholder="confirm password"
              component={Input}
            />
            <div className="modalErrorDiv">
              <ErrorMessage name="confirmPassword" />
            </div>
            <Button className="submitBtn" type="submit">
              Submit
            </Button>
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
