import React from 'react'
<<<<<<< HEAD
import BottomDetailsCardComponent from './BottomDetailsCardComponent'
=======
import './profile.css'
>>>>>>> f953f96ea461ed4479086138dc42ed4754ffa57e

class ProfileContainer extends React.Component {
  render () {
    return (
<<<<<<< HEAD
      <div>
        <BottomDetailsCardComponent />
=======
      <div className='profileMainContainer'>
<<<<<<< HEAD
        <h1 className='profileHeading'>WELCOME TO YOUR PROFILE</h1>
        <div className='profileHeadingLine'></div>
        <p className='profileSummary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='profileSummary'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
>>>>>>> f953f96ea461ed4479086138dc42ed4754ffa57e
=======
        <div className='profileHeader'>
          <h1 className='profileHeading'>WELCOME TO YOUR PROFILE</h1>
          <div className='profileHeadingLine'></div>
          <p className='profileSummary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='profileSummary'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
>>>>>>> 359d5fe2d3f4c806d1e3ce1a04adce44e19cb83b
      </div>
    )
  }
}

export default ProfileContainer
