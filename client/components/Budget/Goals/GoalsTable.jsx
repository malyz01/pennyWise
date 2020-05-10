import React, { Component } from 'react'
import { Table, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectUserGoal, getUserGoals } from '../../../store/actions/goals'
class GoalsTable extends Component {
  componentDidMount () {
    this.props.getUserGoals(this.props.userId)
  }
  handleClick = (goal) => () => {
    this.props.selectUserGoal(goal)
  }
  getPeriod = (end, start) => {
    console.log(end);
    
    const date1 = new Date(end)
    const date2 = new Date(start)
    const diffTime = Math.abs(date2 - date1)
    console.log(diffTime);
    
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
  render () {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Goal Name</Table.HeaderCell>
            <Table.HeaderCell>Target Budget</Table.HeaderCell>
            <Table.HeaderCell>Target Date</Table.HeaderCell>
            <Table.HeaderCell>Time Remaining</Table.HeaderCell>
            <Table.HeaderCell>Current Amount</Table.HeaderCell>
            <Table.HeaderCell>Contributions</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.goals && this.props.goals.map((goal) => {
              return <Table.Row key={goal.id} onClick = {this.handleClick(goal)} active={this.props.selected && goal.id === this.props.selected.id}>
                <Table.Cell>{goal.goalName}</Table.Cell>
                <Table.Cell>{goal.targetBudget}</Table.Cell>
                <Table.Cell>{goal.targetDate}</Table.Cell>
                <Table.Cell>{`${this.getPeriod(goal.targetDate, goal.startDate)} Days`}</Table.Cell>
                <Table.Cell>{goal.currentAmount}</Table.Cell>
                <Table.Cell>{`${goal.budgetDistribution} ${goal.frequency}`}</Table.Cell>
                <Table.Cell>{goal.active ? 'YES' : 'NO'}</Table.Cell>
              </Table.Row>
            })
          }

        </Table.Body>
      </Table>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    goals: state.goal.all,
    selected: state.goal.selected,
    userId: state.auth.user.id
  }
}
const mapDispatchToProps = {
  selectUserGoal,
  getUserGoals
}
export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable)
