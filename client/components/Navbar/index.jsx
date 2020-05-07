import React from 'react'
import './navbar.css'

import LogoMenu from './LogoMenu'
import MenuBtn from './MenuBtn'

const Navbar = () => {
  return (
    <div className='navBarMainContainer'>
      <LogoMenu />
      <MenuBtn />
    </div>
  )
}

export default Navbar
