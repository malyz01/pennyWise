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
      <div className='footerOuterContainer'>
        <div className='footerMainContainer'>
          <Logo />
          <FooterItems />
          <div className='line'></div>
          <SocialLogos />
          <img src="images/pngfind.com-fern-png-473123.png" className='fern' alt=""/>
        </div>
      </div>
    )
  }
}

export default Footer
