import React from 'react'
import { connect } from 'react-redux'
import { setModalOpen, setModalName } from '../../store/actions/modal'

const ProfileMain = (props) => {
  const { user } = props

  const handleOnClick = () => {
    props.setModalName('Update Profile')
    props.setModalOpen(true)
  }

  return (
    <div className='profileBody'>
      <div>
        <div className='fullNameAndEmail'>
          <div className='profileFullName'>{user.fullName}</div>
          <div className='profileEmail'>{user.email}</div>
        </div>
        <div className='editAndSubButton'>
          <button onClick={handleOnClick} className='ui blue button'>edit profile</button>
        </div>
      </div>
      <img className="profileAvatar" src={user.avatar} alt="user avatar image"/>
    </div>
  )
}

const mapDispatchToProps = {
  setModalOpen,
  setModalName
}

export default connect(null, mapDispatchToProps)(ProfileMain)
