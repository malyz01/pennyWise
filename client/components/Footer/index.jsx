import React from 'react'
// ----Sub-Components----
import Logo from './Logo'
import FooterItems from './FooterItems'
import SocialLogos from './SocialLogos'
// -----------CSS------------
import './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className="footerMainContainer">
        <Logo />
        <FooterItems />
        <hr className='footerLine'/>
        <SocialLogos />
      </div>
    )
  }
}

export default Footer
