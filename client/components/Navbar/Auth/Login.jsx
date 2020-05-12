import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import './auth.css'
import Input from '../../FormComponents/Input'
import { authUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Login extends Component {
  handleOnSubmit = values => {
    this.props.authUser(values)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    return (
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={this.handleOnSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <div className="authHeader">{this.props.modal}</div>
          <div className="divider" />
          <div className="authMainContainer">
            <div className="authSubContainer">
              <Field
                name="email"
                type="text"
                title="Email"
                component={Input}
                placeholder="email"
              />
              <ErrorMessage name="email" />
              <Field
                name="password"
                type="password"
                title="Password"
                component={Input}
                placeholder="password"
              />
              <ErrorMessage name="password" />
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

const mapStateToProps = state => ({
  modal: state.modal.name
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  authUser
}

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your correct password')
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
