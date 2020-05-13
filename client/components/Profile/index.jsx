import React from 'react'
import { connect } from 'react-redux'
import './profile.css'

import BottomDetailsCardComponent from './BottomDetailsCardComponent'
import ProfileMain from './ProfileMain'
import Loading from '../Loading'
import { getUserProfile } from '../../store/actions/user'
import { getUserBudget } from '../../store/actions/budget'
import { loading } from '../../store/actions/loading'

class ProfileContainer extends React.Component {
  componentDidMount () {
    this.props.getUserProfile(this.props.userId)
    this.props.getUserBudget(this.props.userId)
  }

  componentWillUnmount () {
    this.props.loading('user', true)
    this.props.loading('budget', true)
  }

  render () {
    const { budget, user } = this.props.load
    if (budget || user) return <Loading />
    return (
      <div className="profileMainContainer">
        <div className="profileHeader">
          <div className="profileHeading">WELCOME TO YOUR PROFILE</div>
          <hr className="profileHeaderLine"/>
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
          <ProfileMain user={this.props.user} />
          <BottomDetailsCardComponent
            expense={this.props.expense}
            income={this.props.income}
            goal = {this.props.goal}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  load: state.loading,
  userId: state.auth.user.id,
  user: state.user.profile,
  expense: state.expense.all,
  income: state.income.all,
  goal: state.goal.all
})

const mapDispatchToProps = {
  getUserProfile,
  getUserBudget,
  loading
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainer
)
