import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import './profile.css'

import { updateUserProfile } from '../../store/actions/user'
import { setModalOpen, setModalName } from '../../store/actions/modal'

export class UpdateProfile extends Component {
  state = {
    fullName: this.props.user.fullName,
    avatar: this.props.user.avatar
  }

  handleOnChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleOnSubmit = async () => {
    await this.props.updateUserProfile(this.props.user.id, this.state)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { fullName, avatar } = this.state
    return (
      <div className="profileModalFormContainer">
        <div className="profileModalHeader">{this.props.form}</div>
        <div className="divider" />
        <Form style={{ height: '100%' }} onSubmit={this.handleOnSubmit}>
          <Form.Field>
            <Form.Input
              value={fullName}
              onChange={this.handleOnChange}
              name="fullName"
              type="text"
              placeholder="full name"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              value={avatar}
              onChange={this.handleOnChange}
              name="avatar"
              type="text"
              placeholder="avatar"
            />
          </Form.Field>
          <Button className="submitBtn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
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
