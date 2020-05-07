import React from 'react'
import './navbar.css'

import LogoMenu from './LogoMenu'
import MenuBtn from './MenuBtn'
import Auth from './Auth'

const Navbar = () => {
  return (
    <>
    <div className='navBarMainContainer'>
      <LogoMenu />
      <MenuBtn />
    </div>
    <Auth />
    </>
  )
}

export default Navbar
