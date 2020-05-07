import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import Logo from './Logo'

class LogoMenu extends Component {
  render () {
    const { isAuthenticated, history } = this.props
    return (
      <div className="navBarLogoContainer">
        <Logo history={history}/>
        <div onClick={() => history.push('/')} className="navBarLogoItem">Home</div>
        {isAuthenticated && (
          <Dropdown text="Budget Tools">
            <Dropdown.Menu>
              <Dropdown.Item text="Calculator" />
              <Dropdown.Item text="Option 2" />
              <Dropdown.Item text="Option 3" />
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
