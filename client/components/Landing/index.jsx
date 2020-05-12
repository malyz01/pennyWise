import React from 'react'
import Info from './Info'
import Carousel from './Carousel'
import Header from './Header'
import './landing.css'
import Slide from 'react-reveal/Slide'
import Content from './Content'
const Landing = () => {
  return (
    <div className = "landing">
      <Header/>
      <Content />
      {/* <div className='landingSubContainer'>
        <div>
          <Slide duration={500} left>
            <Info />
          </Slide>
        </div>
        <div>
          <Slide duration={500} delay={500} right>
            <Carousel />
          </Slide>
        </div>

      </div> */}
    </div>
  )
}

export default Landing
