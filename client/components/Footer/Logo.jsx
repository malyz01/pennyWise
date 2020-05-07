import React from 'react'
import './footer.css'

class Logo extends React.Component {
  render () {
    return (
      <div className='logoContainer'>
        <img className='footerLogo' src='images/pennywise_logo.png' alt='PennyWise Logo' />
        <p className='pennyLogoWord'>PENNY<span className='wiseLogoWord'>WISE</span></p>
      </div>
    )
  }
}

export default Logo
