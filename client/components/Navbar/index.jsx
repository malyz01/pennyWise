import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Icon } from 'semantic-ui-react'
import LogoMenu from './LogoMenu'
import MenuBtn from './MenuBtn'

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(true)

  const handleClick = () => {
    setNavbarToggle(!navbarToggle)
  }

  return (
    <>
      {!navbarToggle && <div className="navToggleOn" onClick={handleClick}><Icon name="chevron circle down"/></div>}
      <div className={`navBarMainContainer ${navbarToggle ? 'navOn' : 'navOff'}`}>
        <div onClick={handleClick}className='navToggle'><Icon name ="arrow up"/></div>
        <LogoMenu />
        <MenuBtn />
      </div>
    </>
  )
}

export default Navbar
