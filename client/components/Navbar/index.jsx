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
  useEffect(() => {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        setNavbarToggle(true)
      } else {
        setNavbarToggle(false)
      }
      prevScrollpos = currentScrollPos
    }
  })
  return (
    <>
      {!navbarToggle && <div className="navToggleOn" onClick={handleClick}><Icon name="chevron down"/></div>}
      <div className={`navBarMainContainer ${navbarToggle ? 'navOn' : 'navOff'}`}>
        <div onClick={handleClick}className='navToggle'><Icon name ="chevron up"/></div>
        <LogoMenu />
        <MenuBtn />
      </div>
    </>
  )
}

export default Navbar
