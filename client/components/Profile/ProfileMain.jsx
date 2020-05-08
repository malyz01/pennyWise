import React from 'react'

const ProfileMain = (props) => {
  return (
    <div className='profileBody'>
      <div>
        <div className='usernameAndEmail'>
          <p className='profileFullName'>Matt Phillip Uy</p>
          <p className='profileEmail'>MattUy@Hotmail.com</p>
        </div>
        <button className="ui primary button">edit profile</button>
        <button className="ui primary button">subscribe email</button>
      </div>
      <img className="profileAvatar" src="/images/profileAvatar.jpg" alt="this do be the profile avatar"/>
    </div>
  )
}

export default ProfileMain
