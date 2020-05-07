import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

export class ExpenseTable extends Component {
  render () {
    return (
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
          {
            [1, 2, 3, 4].map(item => {
              return (
                <Table.Row key={item}>
                  <Table.Cell><input type="checkbox"/></Table.Cell>
                  <Table.Cell>Fuel</Table.Cell>
                  <Table.Cell>Essential</Table.Cell>
                  <Table.Cell>Weekly</Table.Cell>
                  <Table.Cell>$80</Table.Cell>
                  <Table.Cell>ON</Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    )
  }
}

export default ExpenseTable
