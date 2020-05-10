import React from 'react'
import { connect } from 'react-redux'
import './profile.css'

import BottomDetailsCardComponent from './BottomDetailsCardComponent'
import ProfileMain from './ProfileMain'
import { getUserProfile, getUserDetails } from '../../store/actions/user'

class ProfileContainer extends React.Component {
  componentDidMount () {
    this.props.getUserProfile(this.props.userId)
    this.props.getUserDetails(this.props.userId)
  }

  render () {
    if (!this.props.user || !this.props.userData) return <div>Loading...</div>
    return (
      <div className="profileMainContainer">
        <div className="profileHeader">
          <h1 className="profileHeading">WELCOME TO YOUR PROFILE</h1>
          <div className="profileHeadingLine"></div>
          <p className="profileSummary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
          </p>
          <p className="profileSummary">
              Lorem Ipsum has been the industry&#39;s standard dummy text ever
              since the 1500s.
          </p>
        </div>

        <div className="profileCardContainer">
          <ProfileMain user={this.props.user}/>
          <BottomDetailsCardComponent data={this.props.userData} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  user: state.user.profile,
  userData: state.user.userData
})

export default connect(mapStateToProps, { getUserProfile, getUserDetails })(
  ProfileContainer
)
