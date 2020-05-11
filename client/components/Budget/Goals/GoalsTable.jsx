import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { selectUserGoal } from '../../../store/actions/goals'
import { getWeeklyContribution } from './tableHelper'

class GoalsTable extends Component {
  handleClick = (goal) => () => {
    this.props.selectUserGoal(goal)
  }

  getPeriod = (end) => {
    const date1 = new Date(end)
    const date2 = Date.now()
    const diffTime = date1 - date2

    return Math.floor(diffTime / (1000 * 60 * 60 * 24))
  }

  render () {
    return (
      <Fade>
        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Goal Name</Table.HeaderCell>
              <Table.HeaderCell>Target Budget</Table.HeaderCell>
              <Table.HeaderCell>Target Date</Table.HeaderCell>
              <Table.HeaderCell>Time Remaining</Table.HeaderCell>
              <Table.HeaderCell>Current Amount</Table.HeaderCell>
              <Table.HeaderCell>Weekly Contributions</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.goals.map((goal) => {
                return <Table.Row className='pointerCursor' key={goal.id} onClick = {this.handleClick(goal)} active={this.props.selected && goal.id === this.props.selected.id}>
                  <Table.Cell>{goal.goalName}</Table.Cell>
                  <Table.Cell>{goal.targetBudget}</Table.Cell>
                  <Table.Cell>{goal.targetDate}</Table.Cell>
                  <Table.Cell>{`${this.getPeriod(goal.targetDate, goal.startDate)} ${this.getPeriod(goal.targetDate, goal.startDate) > 1 ? 'Days' : 'Day'} `}</Table.Cell>
                  <Table.Cell>{goal.currentAmount}</Table.Cell>
                  <Table.Cell>{getWeeklyContribution(this.getPeriod(goal.targetDate), goal.targetBudget)}</Table.Cell>
                  <Table.Cell>{goal.active ? 'YES' : 'NO'}</Table.Cell>
                </Table.Row>
              })
            }

          </Table.Body>
        </Table>
      </Fade>
    )
  }
}
const mapStateToProps = (state) => ({
  goals: state.goal.all,
  selected: state.goal.selected,
  userId: state.auth.user.id
})
const mapDispatchToProps = {
  selectUserGoal
}
export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable)
