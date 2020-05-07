import React from 'react'
import './index.css'
import ProfileMain from './ProfileMain'

class ProfileContainer extends React.Component {
  render () {
    return (
      <div className="profileRow">
        <h2>hello friend</h2>
        <ProfileMain />
      </div>
    )
  }
}

export default ProfileContainer
