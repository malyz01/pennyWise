import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import './auth.css'
import Input from '../../FormComponents/Input'
import { authUser } from '../../../store/actions/auth'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

export class Login extends Component {
  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

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
        validationSchema={SignupSchema}
      >
        <Form>
          <div className='authHeader'>{this.props.modal}</div>
          <div className='divider' />
          <Field
            name='email'
            type='text'
            label='labelme'
            component={Input}
            placeholder='email'
          />
          <Field
            name='password'
            type='password'
            component={Input}
            placeholder='password'
          />
          <Button className='submitBtn' type='submit'>
            Submit
          </Button>
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

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().required()
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
