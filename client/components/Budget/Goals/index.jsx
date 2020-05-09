import React, { Component } from 'react'
import  {getUserGoals, addUserGoals, updateUserGoals, deleteUserGoals} from '../../../store/actions/goals'
import { connect } from 'react-redux'
import Button from 'semantic-ui-react'

class Goal extends Component {
  
  handleOnClick = () => (evt) => {

  }
 
  render() {
    return (
      <div className="goalMainContainer">
        <div className="goalHeader">
          SPECIFY INCOME ALLOCATION FOR YOUR GOALS
        </div>
        <div className="goalBtnContainer">
          <Button onClick={this.handleOnClick('add')}>ADD GOAL</Button>
          <Button onClick={this.handleOnClick('toggle')}>ON/OFF</Button>
          <Button onClick={this.handleOnClick('delete')}>DELETE</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps =  (state) => ({
  goals: state.goal.all,
  selected: state.goal.selected
})

const mapDispatchToProps = {
  getUserGoals, addUserGoals, updateUserGoals, deleteUserGoals
}
export default connect(mapStateToProps, mapDispatchToProps)(Goal)
