import React from 'react'
import Info from './Info'
import Carousel from './Carousel'
import Header from './Header'
import './landing.css'

const Landing = () => {
  return (
    <div className = "landing">

      <div className = "landingBody">
        <Header/>
        <Info />
        <Carousel/>
      </div>

    </div>
  )
}

export default Landing
