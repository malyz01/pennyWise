import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoalsTable from './GoalsTable'
import { getUserGoals, addUserGoal, updateUserGoal, deleteUserGoals } from '../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../store/actions/modal'
import { Button } from 'semantic-ui-react'

class Goals extends Component {
  handleOnClick = (name) => () => {
    const { updateUserGoal, deleteUserGoals, selected } = this.props
    if (name === 'Add Goal' || name === 'Update Goal') {
      this.props.setModalName(name)
      this.props.setModalOpen(true)
    }
    if (name === 'toggle') {
      selected.active = !selected.active
      return updateUserGoal(selected.id, selected)
    }
    if (name === 'delete') return deleteUserGoals(selected.id)
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
        <GoalsTable/>
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
  setModalOpen,
  setModalName
}
export default connect(mapStateToProps, mapDispatchToProps)(Goals)
