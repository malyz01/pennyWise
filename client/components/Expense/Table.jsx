import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import './expense.css'

import { selectUserExpense } from '../../store/actions/expense'

export class ExpenseTable extends Component {
  handleOnSelect = (e) => () => {
    const { data: { selected }, selectUserExpense } = this.props
    if (selected && selected.id === e.id) {
      return selectUserExpense(null)
    }
    selectUserExpense(e)
  }

  render () {
    const { expenses, selected } = this.props.data
    const select = selected || { id: 0 }
    return (
      <Container className="expenseTable">
        <Table inverted selectable singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Expense</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Frequency</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {expenses.map((e, i) => (
              <Table.Row
                onClick={this.handleOnSelect(e)}
                active={e.id === select.id}
                key={i}
              >
                <Table.Cell>{e.expenseName}</Table.Cell>
                <Table.Cell>{e.categories}</Table.Cell>
                <Table.Cell>{e.frequency}</Table.Cell>
                <Table.Cell>{e.expenseAmount}</Table.Cell>
                <Table.Cell>{e.active ? 'Yes' : 'No'}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  selectUserExpense
}

export default connect(null, mapDispatchToProps)(ExpenseTable)
