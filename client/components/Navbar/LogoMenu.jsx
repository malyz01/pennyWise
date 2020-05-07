import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class LogoMenu extends Component {
  render () {
    return (
      <div className='navBarLogoContainer'>
        <div className='navBarLogoItem'>PENNYWISE</div>
        <div className='navBarLogoItem'>Home</div>
        <Dropdown text='Budget Tools'>
          <Dropdown.Menu>
            <Dropdown.Item text='Calculator' />
            <Dropdown.Item text='Option 2' />
            <Dropdown.Item text='Option 3' />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default LogoMenu
