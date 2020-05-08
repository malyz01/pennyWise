import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'
import './income.css'
import Fade from 'react-reveal/Fade'
export class incomeTable extends Component {
  render () {
    return (

      <Fade>
        <Container className="incomeTable">
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Select</Table.HeaderCell>
                <Table.HeaderCell>Income</Table.HeaderCell>
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
                      <Table.Cell>Main</Table.Cell>
                      <Table.Cell>Primary</Table.Cell>
                      <Table.Cell>Weekly</Table.Cell>
                      <Table.Cell>$100</Table.Cell>
                      <Table.Cell>ON</Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>
          </Table>
        </Container>
      </Fade>

    )
  }
}

export default incomeTable
