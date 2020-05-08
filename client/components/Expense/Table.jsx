import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

import './expense.css'
import { getUserExpense } from '../../store/actions/expense'

export class ExpenseTable extends Component {
  componentDidMount () {
    const { getUserExpense } = this.props

    getUserExpense(this.props.userId)
  }

  render () {
    const { data } = this.props.userData
    return (
      <Fade>
        <Container className='expenseTable'>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Select</Table.HeaderCell>
                <Table.HeaderCell>Expense</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Frequency</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>State</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data &&
                data.map(item => {
                  return (
                    <Table.Row key={item.id}>
                      <Table.Cell>
                        <input type='checkbox' />
                      </Table.Cell>
                      <Table.Cell>{item.expense_name}</Table.Cell>
                      <Table.Cell>{item.categories}</Table.Cell>
                      <Table.Cell>{item.frequency}</Table.Cell>
                      <Table.Cell>{item.expense_amount}</Table.Cell>
                      <Table.Cell>ON</Table.Cell>
                    </Table.Row>
                  )
                })}
            </Table.Body>
          </Table>
        </Container>
      </Fade>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.expense,
    userId: state.auth.user.id
  }
}

const mapDispatchToProps = {
  getUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable)
