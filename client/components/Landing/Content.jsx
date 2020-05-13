import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './content.css'
// import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

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
        <Fade >
          <div className="landingContentJoin">
            <div className="landingInfoHeading">
              <h1>PennyWise</h1>
            </div>
            <hr className="landingInfoHr" />
            <div className="landingInfoList">
              <div className="landginInfoBody">
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Stuck on the Money-Go-Round?</p>
              </div><br />
              <div className="landginInfoBody">
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                  Bring your money and budgeting back in balance
                </p>
              </div>
              {/* {!props.isAuthenticated && (
                <button
                  onClick={handleOnClick}
                  className="ui button landingSignUp"
                >
                  Sign Up
                </button>
              )} */}
            </div>
          </div>
        </Fade>
        <Fade>
          <Carousel />
        </Fade>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setModalName, setModalOpen })(Content)
