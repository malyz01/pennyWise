import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import MenuIcon from '@material-ui/icons/Menu'
import './header.css'

class Header extends Component {
  render () {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#2f2f2f',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header header_logo_app">Pennywise</div>
            <div className="header_logo_title">Budget - Your Game</div>
          </div>
          <MenuIcon />
        </Toolbar>

      </AppBar>
    )
  }
}

export default Header
