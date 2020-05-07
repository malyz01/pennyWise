import React from 'react'

class FooterItems extends React.Component {
  render() {
    return (
      <div className='container' >

        {/* ======================ABOUT============================ */}

        <div className='footerLink'>
          <p className='footerHeading'>ABOUT</p>
          <div className='aboutSection'>
            <p>About Us</p>
            <p>Careers</p>
            <p>Help</p>
          </div>
        </div>

        {/* ====================CONTACTS=========================== */}

        <div className='footerLink'>
          <p className='footerHeading'>CONTACT</p>
          {/* <div className='footerLinks'> */}
          <div className='contactSection'>
            <p><a href="#">Matt Uy</a></p>
            <p><a href="#">Chris Alba</a></p>
            <p><a href="#">Lucas Santana</a></p>
            <p><a href="#">Jimmi Meredith</a></p>
            <p><a href="#">Raymond Leung</a></p>
            <p><a href="#">David Dumolo</a></p>
          </div>
          {/* </div> */}
        </div>

        {/* ======================COURSE============================== */}

        <div className='footerLink'>
          <p className='footerHeading'>COURSE</p>
          <div className='awardsSection'>
            <a href='https://devacademy.co.nz'><p>Enspiral Dev Academy</p></a>
          </div>
        </div>

        {/* ======================AWARDS=============================== */}

        <div className='footerLink'>
          <p className='footerHeading'>AWARDS</p>
          <div className='awardSection'>
            <p>Best Budgeting App 2020</p>
            <p>Most Innovative Team 2020</p>
            <p>#1 Creative UI Team 2020</p>
            <p>Most Attractive Staff 2018/2019/2020</p>
            <p>"PennyWise is maximum Big Don Energy!" - Don Smith</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterItems
