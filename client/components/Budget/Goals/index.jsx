import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserGoals, addUserGoals, updateUserGoals, deleteUserGoals } from '../../../store/actions/goals'
import { setModalGoalOpen, setModalGoalForm } from '../../../store/actions/modal'
import { Button } from 'semantic-ui-react'

class Goal extends Component {
  handleOnClick = (name) => (evt) => {
    const { updateUserGoals, deleteUserGoals, selected, setModalGoalOpen } = this.props
    switch (name) {
      case 'add':
        setModalGoalOpen(true)
        setModalGoalForm('Add Goal')
        break
      case 'toggle':
        selected.active = !selected.active
        return updateUserGoals(selected.id, selected)
      case 'update':
        setModalGoalOpen(true)
        setModalGoalForm('Update Goal')
        break
      case 'delete':
        deleteUserGoals(selected.id)
        break
      default:
        break
    }
  }

  render () {
    return (
      <div className="goalMainContainer">
        <div className="goalHeader">
          SPECIFY INCOME ALLOCATION FOR YOUR GOALS
        </div>
        <div className="goalBtnContainer">
          <Button onClick={this.handleOnClick('add')}>ADD GOAL</Button>
          <Button onClick={this.handleOnClick('toggle')}>ON/OFF</Button>
          <Button onClick={this.handleOnClick('delete')}>DELETE</Button>
          <Button onClick={this.handleOnClick('update')}>UPDATE</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  goals: state.goal.all,
  selected: state.goal.selected
})

const mapDispatchToProps = {
  getUserGoals, addUserGoals, updateUserGoals, deleteUserGoals, setModalGoalOpen
}
export default connect(mapStateToProps, mapDispatchToProps)(Goal)
