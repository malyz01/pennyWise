import React from 'react'
import './content.css'
import Carousel from './Carousel'
import { Container } from 'semantic-ui-react'
function Content () {
  return (
    <div className="landingContent">
      <Container>
        <div className='landingContentJoin'>
          <div className="landingInfoHeading"><h1>Join the Wise</h1></div>
          <hr className='landingInfoHr' />
          <div className='landingInfoList'>
            <div className='landginInfoBody'>- COVID-19 information regarding you and your money</div>
            <div className='landginInfoBody'>- Your money, mindfulness and this moment</div>
            <div className='landginInfoBody'>- Too many of us worry about our money situations. Sorting your money is good for your mental health too.</div>
            <button className="ui button landingSignUp">Sign Up</button>
          </div>

        </div>
        <Carousel/>
      </Container>

    </div>
  )
}

export default Content
