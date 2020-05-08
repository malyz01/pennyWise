import React from 'react'

const c = {
  logoContainer: {
    display: 'flex',
    marginRight: '80px',
    cursor: 'pointer'
  },
  img: {
    maxWidth: '50px',
    marginRight: '1.2rem'
  },
  logoTextContainer: {
    alignSelf: 'center',
    fontSize: '2rem',
    fontWeight: '600',
    fontFamily: `Quicksand, sans-serif`,
    letterSpacing: '3px'
  },
  logoTextPenny: {
    color: '#7363C8'
  },
  logoTextWise: {
    color: '#B7B7B7'
  }
}

const Logo = ({ history }) => {
  return (
    <div onClick={() => history.push('/')} style={c.logoContainer}>
      <img style={c.img} src="images/pennywise_logo.png" alt="PennyWise Logo" />
      <div style={c.logoTextContainer}>
        <div style={c.logoTextPenny}>
          PENNY<span style={c.logoTextWise}>WISE</span>
        </div>
      </div>
    </div>
  )
}

export default Logo
