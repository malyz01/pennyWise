import React from 'react'

const ProfileMain = (props) => {
  return (
    <div className='profileBody'>
      <div>
        <div className='fullNameAndEmail'>
          <div className='profileFullName'>Matt Phillip Uy</div>
          <div className='profileEmail'>MattUy@Hotmail.com</div>
        </div>
        <div className='topButtons'>
          <button className="ui primary button edit">edit profile</button>
          <button className="ui primary button sub">subscribe email</button>
        </div>
      </div>
      <img className="profileAvatar" src="/images/profileAvatar.jpg" alt="this do be the profile avatar"/>
    </div>
  )
}

export default ProfileMain
