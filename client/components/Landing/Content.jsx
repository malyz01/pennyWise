import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './content.css'
import Slide from 'react-reveal/Slide'

import Carousel from './Carousel'
import { setModalOpen, setModalName } from '../../store/actions/modal'

const Content = (props) => {
  const handleOnClick = () => {
    props.setModalName('signup')
    props.setModalOpen(true)
  }

  return (
    <div className="landingContent">
      <Container>
        <Slide left duration={500}>
          <div className="landingContentJoin">
            <div className="landingInfoHeading">
              <h1>Join the Wise</h1>
            </div>
            <hr className="landingInfoHr" />
            <div className="landingInfoList">
              <div className="landginInfoBody">
                - COVID-19 information regarding you and your money
              </div>
              <div className="landginInfoBody">
                - Your money, mindfulness and this moment
              </div>
              <div className="landginInfoBody">
                - Too many of us worry about our money situations. Sorting your
                money is good for your mental health too.
              </div>
              {!props.isAuthenticated && (
                <button
                  onClick={handleOnClick}
                  className="ui button landingSignUp"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </Slide>
        <Slide right duration={500} delay={500}>
          <Carousel />
        </Slide>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setModalName, setModalOpen })(Content)
