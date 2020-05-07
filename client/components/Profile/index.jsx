import React from 'react'
import BottomDetailsCardComponent from './BottomDetailsCardComponent'
import './profile.css'
// import './index.css'
import ProfileMain from './ProfileMain'

class ProfileContainer extends React.Component {
  render () {
    return (
      <div className='profileMainContainer'>
        <h1 className='profileHeading'>WELCOME TO YOUR PROFILE</h1>
        <div className='profileHeadingLine'></div>
        <p className='profileSummary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='profileSummary'>Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</p>

        <div className='profileCardContainer'>
          <BottomDetailsCardComponent />
          <ProfileMain />
        </div>
      </div>
    )
  }
}

export default ProfileContainer
