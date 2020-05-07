import React from 'react'
// ----Sub-Components----
import Logo from './Logo'
import FooterItems from './FooterItems'
import SocialLogos from './SocialLogos'
// -----------------------

class Footer extends React.Component {
  render () {
    return (
      <div className='footerMainContainer'>
        <Logo />
        <FooterItems />
        <SocialLogos />
      </div>
    )
  }
}

export default Footer
