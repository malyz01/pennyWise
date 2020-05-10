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
  render () {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.goals && this.props.goals.map((goal) => {
              return <Table.Row key={goal.id} onClick = {this.handleClick(goal)} active={this.props.selected && goal.id === this.props.selected.id}>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
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
