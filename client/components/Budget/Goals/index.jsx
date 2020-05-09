import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserGoals, addUserGoal, updateUserGoal, deleteUserGoals } from '../../../store/actions/goals'
import { setModalGoalOpen, setModalGoalForm } from '../../../store/actions/modal'
import { Button } from 'semantic-ui-react'

class Goal extends Component {
  handleOnClick = (name) => (evt) => {
    const {
      updateUserGoal,
      deleteUserGoals,
      selected,
      setModalGoalOpen,
      setModalGoalForm
    } = this.props
    if (name === 'Add Goal' || name === 'Update Goal') {
      setModalGoalOpen(true)
      setModalGoalForm(name)
    }
    if (name === 'toggle') {
      selected.active = !selected.active
      return updateUserGoal(selected.id, selected)
    }
    if (name === 'toggle') return deleteUserGoals(selected.id)
  }

  render () {
    return (
      <div className="goalMainContainer">
        <div className="goalHeader">
          SPECIFY INCOME ALLOCATION FOR YOUR GOALS
        </div>
        <div className="goalBtnContainer">
          <Button onClick={this.handleOnClick('Add Goal')}>ADD GOAL</Button>
          {this.props.selected && (
            <>
              <Button onClick={this.handleOnClick('toggle')}>ON/OFF</Button>
              <Button onClick={this.handleOnClick('delete')}>DELETE</Button>
              <Button onClick={this.handleOnClick('Update Goal')}>
                UPDATE
              </Button>
            </>
          )}
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
  getUserGoals,
  addUserGoal,
  updateUserGoal,
  deleteUserGoals,
  setModalGoalOpen,
  setModalGoalForm
}
export default connect(mapStateToProps, mapDispatchToProps)(Goal)
