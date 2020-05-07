import React from 'react'

class FooterItems extends React.Component {
  render () {
    return (
      <div className='container' >
        <div className='footerLink'>
          <p className='footerHeading'>ABOUT</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Help</p>
        </div>
        <div className='footerLink'>
          <p className='footerHeading'>CONTACT</p>
          <div className='footerLinks'>
            <a href="#"><p>Matt Uy</p></a>
            <a href="#"><p>Chris Alba</p></a>
            <a href="#"><p>Lucas Santana</p></a>
            <a href="#"><p>Jimmi Meredith</p></a>
            <a href="#"><p>Raymond Leung</p></a>
            <a href="#"><p>David Dumolo</p></a>
          </div>
        </div>
        <div className='footerLink'>
          <p className='footerHeading'>COURSE</p>
          <a href='https://devacademy.co.nz'>Enspiral Dev Academy</a>
        </div>
        <div className='footerLink'>
          <p className='footerHeading'>AWARDS</p>
          <p>Best Budgeting App 2020</p>
          <p>Most Innovative Team 2020</p>
          <p>Most Attractive Staff 2018/2019/2020</p>
          <p>#1 Creative UI Team 2020</p>
          <p>"PennyWise is maximum Big Don Energy!" - Don Smith</p>
        </div>
      </div>
    )
  }
}

export default FooterItems
