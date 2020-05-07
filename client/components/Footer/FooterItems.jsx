import React from 'react'

class FooterItems extends React.Component {
  render () {
    return (
      <div className='container' >
        <div className='footerLink'>
          <p className='footerHeading'>About</p>
          <p>About Us</p>
        </div>
        <div className='footerLink'>
          <p className='footerHeading'>Contact</p>
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
          <p className='footerHeading'>Course</p>
          <a href='https://devacademy.co.nz'>Enspiral Dev Academy</a>
        </div>
        <div className='footerLink'>
          <p className='footerHeading'>Awards</p>
          <p>Best Budgeting App 2020</p>
          <p>Most Innovative Team 2020</p>
          <p>Most Attractive Staff 2018/2019/2020</p>
        </div>
      </div>
    )
  }
}

export default FooterItems
