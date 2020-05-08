import React from 'react'
import { connect } from 'react-redux'

const ProfileMain = ({ user }) => {
  return (
    <div className='profileBody'>
      <div>
        <div className='fullNameAndEmail'>
          <div className='profileFullName'>{user.fullName}</div>
          <div className='profileEmail'>{user.email}</div>
        </div>
        <div className='editAndSubButton'>
          <button className='ui blue button'>edit profile</button>
          <button className="ui purple button">subscribe email</button>
        </div>
      </div>
      <img className="profileAvatar" src={user.avatar} alt="user avatar image"/>
    </div>
  )
}

export default connect()(ProfileMain)
