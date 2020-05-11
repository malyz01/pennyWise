import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoalsTable from './GoalsTable'
import { addUserGoal, updateUserGoal, deleteUserGoals } from '../../../store/actions/goals'
import { setModalOpen, setModalName } from '../../../store/actions/modal'
import './goals.css'

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
        <div className="goalTableHeader">
          <div className="goalHeaderTitle">
          SPECIFY INCOME ALLOCATION FOR YOUR GOALS
          </div>
          <hr className="goalsTitleLine"/>
        </div>
        <div className="goalButtons">
          <button className="ui button add"onClick={this.handleOnClick('Add Goal')}>ADD GOAL</button>
          {this.props.selected && this.props.goals && (
              <>
                <button className="ui button" onClick={this.handleOnClick('toggle')}>ON/OFF</button>
                <button className="ui button" onClick={this.handleOnClick('delete')}>DELETE</button>
                <button className="ui button" onClick={this.handleOnClick('Update Goal')}>
                UPDATE
                </button>
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
  addUserGoal,
  updateUserGoal,
  deleteUserGoals,
  setModalOpen,
  setModalName
}
export default connect(mapStateToProps, mapDispatchToProps)(Goals)
