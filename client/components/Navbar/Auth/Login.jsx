import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Button } from 'semantic-ui-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import './auth.css'
import Input from '../../FormComponents/Input'
import { authUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Login extends Component {
  state = {
    error: null
  }

  handleOnSubmit = async values => {
    try {
      await this.props.authUser(values)
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
          email: '',
          password: ''
        }}
        onSubmit={this.handleOnSubmit}
        validationSchema={LoginSchema}
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
              title="Email"
              name="email"
              type="text"
              component={Input}
              placeholder="email"
            />
            <div className="modalErrorDiv">
              <ErrorMessage name="email" />
            </div>
            <Field
              name="password"
              type="password"
              title="Password"
              component={Input}
              placeholder="password"
            />
            <div className="modalErrorDiv">
              <ErrorMessage name="password" />
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
