import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { selectUserGoal } from '../../../store/actions/goals'
import { getWeeklyContribution } from './tableHelper'
import { addCommas } from '../../helpers'
class GoalsTable extends Component {
  handleClick = goal => () => {
    this.props.selectUserGoal(goal)
  }

  getRemaining = (end, type, targetAmount, currentAmount) => {
    const date1 = new Date(end)

    if (date1.toString() === 'Invalid Date') {
      if (targetAmount === currentAmount) {
        return 'Goal Reached'
      }
      return '-'
    }
    const date2 = new Date()
    const diffTime = date1 - date2
    let remaining = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (type === 'string') {
      if (remaining > 1) {
        remaining = addCommas(remaining, true)
        return `${remaining} days`
      }
      if (remaining <= 0) {
        return `Completed!`
      }
      return remaining
    }

    return remaining
  }

  getDailyContribution = (amount, frequency) => {
    switch (frequency) {
      case 'Weekly':
        return amount / 7
      case 'Monthly':
        return (amount * 12) / (52 * 7)
      case 'Annually':
        return amount / (52 * 7)
    }
  }
  getWeeklyContribution = (amount, frequency) => {
    switch (frequency) {
      case 'Monthly':
        return (amount * 12) / 52
      case 'Annually':
        return amount / 52
      default:
        return amount
    }
  }
  getActualDate = (amountAdded, frequency, targetBudget, currentAmount) => {
    // calculate days left
    if (targetBudget - currentAmount <= 0) {
      return 'Goal Completed'
    }

    const daysLeft =
      (targetBudget - currentAmount) /
      this.getDailyContribution(amountAdded, frequency)

    const millisecondsLeft = daysLeft * 24 * 60 * 60 * 1000

    // calculate date of completion (current date + days left = date of completion)
    const currentDate = Date.now()
    const completionDate = new Date(
      Number(currentDate) + Number(millisecondsLeft)
    )

    const formatedDate = completionDate.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })

    return formatedDate
  }
  formatDate = (date, type) => {
    if (date === 'Goal Completed') {
      return 'Goal Reached'
    }
    if (date === 'Invalid Date') {
      return '-'
    }
    if (type === 'chosen') {
      console.log(date)
      const segments = date.split('-')
      console.log(segments)
      return `${segments[2]}/${segments[1]}/${segments[0]}`
    }
    if (type === 'actual') {
      const segments = date.split('/')
      return `${segments[1]}/${segments[0]}/${segments[2]}`
    }
    return 'invalid type'
  }
  render () {
    return (
      <Fade>
        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Goal</Table.HeaderCell>
              <Table.HeaderCell>Target Amount</Table.HeaderCell>
              <Table.HeaderCell>Current Amount</Table.HeaderCell>
              <Table.HeaderCell>Weekly Contribution</Table.HeaderCell>
              <Table.HeaderCell>Automated Completion Date</Table.HeaderCell>
              <Table.HeaderCell>Time Remaining</Table.HeaderCell>
              <Table.HeaderCell className='goalsTableSpecial'>Automated Weekly Contribution</Table.HeaderCell>
              <Table.HeaderCell className='goalsTableSpecial'>Selected Completion Date</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.goals.map(goal => {
              return (
                <Table.Row
                  className="pointerCursor"
                  key={goal.id}
                  onClick={this.handleClick(goal)}
                  active={
                    this.props.selected && goal.id === this.props.selected.id
                  }
                >
                  <Table.Cell>{goal.goalName}</Table.Cell>
                  <Table.Cell>{addCommas(goal.targetBudget)}</Table.Cell>
                  <Table.Cell>{addCommas(goal.currentAmount)}</Table.Cell>
                  <Table.Cell>
                    {addCommas(this.getWeeklyContribution(
                      goal.budgetDistribution,
                      goal.frequency
                    ))}
                  </Table.Cell>
                  <Table.Cell>{`${this.formatDate(
                    this.getActualDate(
                      goal.budgetDistribution,
                      goal.frequency,
                      goal.targetBudget,
                      goal.currentAmount
                    ),
                    'actual'
                  )}`}</Table.Cell>
                  <Table.Cell>
                    {this.getRemaining(
                      this.getActualDate(
                        goal.budgetDistribution,
                        goal.frequency,
                        goal.targetBudget,
                        goal.currentAmount
                      ),
                      'string',
                      goal.targetBudget,
                      goal.currentAmount
                    )}
                  </Table.Cell>
                  <Table.Cell className="goalsTableSpecial">
                    {addCommas(
                      getWeeklyContribution(
                        this.getRemaining(goal.targetDate),
                        goal.currentAmount,
                        goal.targetBudget
                      )
                    )}
                  </Table.Cell>
                  <Table.Cell className="goalsTableSpecial">
                    {this.formatDate(goal.targetDate, 'chosen')}
                  </Table.Cell>
                  <Table.Cell>{goal.active ? 'Yes' : 'No'}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Fade>
    )
  }
}

const mapStateToProps = state => ({
  goals: state.goal.all,
  selected: state.goal.selected,
  userId: state.auth.user.id
})

const mapDispatchToProps = {
  selectUserGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable)
