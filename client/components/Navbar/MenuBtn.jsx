import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Dropdown } from 'semantic-ui-react'

import { logout } from '../../store/actions/auth'
import { setModalName, setModalOpen } from '../../store/actions/modal'

class MenuBtn extends Component {
  handleOnClick = (route) => () => {
    this.props.setModalName(route)
    this.props.setModalOpen(true)
  }

  logout = () => {
    const { history, logout } = this.props
    logout()
    if (history.location.pathname !== '/') history.push('/')
  }

  renderAuthBtn = () => {
    return <>
      <Button
        onClick={this.handleOnClick('signup')}
        size="large"
        className="signupBtn"
      >
        SIGN UP
      </Button>
      <Button
        onClick={this.handleOnClick('login')}
        size="large"
        className="loginBtn"
      >
        LOGIN
      </Button>
    </>
  }

  renderLogInMenu = () => {
    const { user, history } = this.props
    return (
      <div className="logoutContainer">
        <div>Signed in as: </div>
        <Dropdown className="signedInName" text={user} pointing>
          <Dropdown.Menu>
            <Dropdown.Item
              className="dropdownItem"
              onClick={() => history.push('/profile')}
              text="Profile"
            />
            <Dropdown.Item
              className="dropdownItem"
              onClick={this.logout}
              text="Logout"
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }

  render () {
    const { authenticated } = this.props
    return (
      <div>
        {!authenticated ? this.renderAuthBtn() : this.renderLogInMenu()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated,
  user: state.auth.user.fullName
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuBtn))
