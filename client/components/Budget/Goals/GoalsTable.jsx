import React, { Component } from 'react'
import { Table, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectUserGoal, getUserGoals } from '../../../store/actions/goals'
class GoalsTable extends Component {
  componentDidMount () {
    this.props.getUserGoals(this.props.userId)
  }
  handlClick = () => (goal) => {
    console.log(goal)
    
  }
  render () {
    console.log(this.props.goals)
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
              return <Table.Row key={goal.id} onClick = {this.props.selectUserGoal(goal)}>
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
    goals: state.goal.all.data,
    selected: state.goal.selected,
    userId: state.auth.user.id
  }
}
const mapDispatchToProps = {
  selectUserGoal,
  getUserGoals
}
export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable)
