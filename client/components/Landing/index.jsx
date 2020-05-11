import React from 'react'
import Info from './Info'
import Carousel from './Carousel'
import Header from './Header'
import './landing.css'
import Slide from 'react-reveal/Slide'

const Landing = () => {
  return (
    <div className = "landing">
      <Header/>
      <div className='landingSubContainer'>
        <Slide duration={500} left>
          <Info />
        </Slide>
        <Slide duration={500} delay={500} right>        <Carousel />
        </Slide>
      </div>
    </div>
  )
}

export default Landing
