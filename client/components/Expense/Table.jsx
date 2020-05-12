import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { addCommas } from '../helpers'
import './expense.css'
import { selectUserExpense } from '../../store/actions/expense'

export class ExpenseTable extends Component {
  handleOnSelect = e => () => {
    const {
      data: { selected },
      selectUserExpense
    } = this.props
    if (selected && selected.id === e.id) return selectUserExpense(null)
    selectUserExpense(e)
  }

  render () {
    const { expenses, selected } = this.props.data
    const select = selected || { id: 0 }
    return (
      <Fade>
        <Container className='expenseTable'>
          <Table inverted singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Expenses</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Frequency</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Active</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {expenses.map((e, i) => (
                <Table.Row className='pointerCursor'
                  onClick={this.handleOnSelect(e)}
                  active={e.id === select.id}
                  key={i}
                >
                  <Table.Cell>{e.expenseName}</Table.Cell>
                  <Table.Cell>{e.categories}</Table.Cell>
                  <Table.Cell>{e.frequency}</Table.Cell>
                  <Table.Cell>${addCommas(e.expenseAmount)}</Table.Cell>
                  <Table.Cell>{e.active ? 'Yes' : 'No'}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </Fade>
    )
  }
}

const mapDispatchToProps = {
  selectUserExpense
}

export default connect(null, mapDispatchToProps)(ExpenseTable)
