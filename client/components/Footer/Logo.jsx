import React from 'react'
import './footer.css'

class Logo extends React.Component {
  render () {
    return (
      <div className='logoContainer'>
        <img className='logo' src='images/pennywise_logo.png' alt='PennyWise Logo' />
        <p className='penny'>PENNY<span className='wise'>WISE</span></p>
      </div>
    )
  }
}

export default Logo
