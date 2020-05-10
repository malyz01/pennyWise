import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import Logo from './Logo'

class LogoMenu extends Component {
  handleOnClick = (route) => () => {
    const { history } = this.props
    if (history.location.pathname === route) return
    history.push(route)
  }

  render () {
    const { isAuthenticated, history } = this.props
    return (
      <div className="navBarLogoContainer">
        <Logo history={history} />
        <div onClick={() => history.push('/')} className="navBarLogoItem">
          Home
        </div>
        {isAuthenticated && (
          <Dropdown pointing text="Budget Tools">
            <Dropdown.Menu>
              <Dropdown.Item
                className="dropdownItem"
                onClick={this.handleOnClick('/income')}
                text="Income"
              />
              <Dropdown.Item
                className="dropdownItem"
                onClick={this.handleOnClick('/expense')}
                text="Expense"
              />
              <Dropdown.Item
                className="dropdownItem"
                onClick={this.handleOnClick('/budget')}
                text="Budget"
              />
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withRouter(LogoMenu))
