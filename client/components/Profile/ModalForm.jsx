import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field } from 'formik'
import './profile.css'

import Input from '../FormComponents/Input'
import { updateUserProfile } from '../../store/actions/user'
import { setModalOpen, setModalName } from '../../store/actions/modal'

export class UpdateProfile extends Component {
  handleOnSubmit = async (values) => {
    await this.props.updateUserProfile(this.props.user.id, values)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { fullName, avatar } = this.props.user
    return (
      <Formik
        initialValues={{
          fullName,
          avatar
        }}
        onSubmit={this.handleOnSubmit}
      >
        <Form>
          <div className="modalProfileMainContainer">
            <div className="modalProfileHeader">{this.props.form}</div>
            <div className="divider" />
            <Field
              title="Full name"
              name="fullName"
              type="text"
              component={Input}
              placeholder="full name"
            />
            <Field
              title="Avatar url"
              name="avatar"
              type="text"
              component={Input}
              placeholder="avatar url"
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

const mapStateToProps = (state) => ({
  form: state.modal.name,
  user: state.user.profile
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)
