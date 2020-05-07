import React from 'react'
import './profile.css'

class ProfileContainer extends React.Component {
  render () {
    return (
      <div className='profileMainContainer'>
        <div className='profileHeader'>
          <h1 className='profileHeading'>WELCOME TO YOUR PROFILE</h1>
          <div className='profileHeadingLine'></div>
          <p className='profileSummary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='profileSummary'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>
    )
  }
}

export default ProfileContainer
