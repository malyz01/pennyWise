import React from 'react'

class FooterItems extends React.Component {
  render () {
    return (
      <div className='footerItemsContainer' >

        {/* ======================ABOUT============================ */}

        <div className='footerLinks'>
          <p className='footerHeading'>ABOUT</p>
          <div className='aboutSection'>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Careers</a></p>
            <p><a href="#">Help</a></p>
          </div>
        </div>

        {/* ====================CONTACTS=========================== */}

        <div className='footerLinks'>
          <p className='footerHeading'>CONTACT</p>
          {/* <div className='footerLinks'> */}
          <div className='contactSection'>
            <p><a href="mailto:emailofuser">Matt Uy</a></p>
            <p><a href="mailto:emailofuser">Chris Alba</a></p>
            <p><a href="mailto:emailofuser">Lucas Santana</a></p>
            <p><a href="mailto:jimmi.meredith@gmail.com">Jimmi Meredith</a></p>
            <p><a href="mailto:emailofuser">Raymond Leung</a></p>
            <p><a href="mailto:emailofuser">David Dumolo</a></p>
          </div>
          {/* </div> */}
        </div>

        {/* ======================COURSE============================== */}

        <div className='footerLinks'>
          <p className='footerHeading'>COURSE</p>
          <p><a href='https://devacademy.co.nz'>Enspiral Dev Academy</a></p>
        </div>

        {/* ======================AWARDS=============================== */}

        <div className='footerLinks'>
          <p className='footerHeading'>AWARDS</p>
          <div className='awardSection'>
            <p>Best Budgeting App 2020</p>
            <p>Most Innovative Team 2020</p>
            <p>#1 Creative UI Team 2020</p>
            <p>Most Attractive Staff 2018/2019/2020</p>
            <p>&#34;PennyWise is maximum Big Don Energy!&#34; - Don Smith</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterItems
