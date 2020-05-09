import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

export default class Table extends Component {
  render () {
    return (
      <Fade>
        <Container className='incomeTable'>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Income</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Frequency</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Active</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {income.map((e, i) => (
                <Table.Row
                  onClick={this.handleOnSelect(e)}
                  active={e.id === select.id}
                  key={i}
                >
                  <Table.Cell>{e.incomeName}</Table.Cell>
                  <Table.Cell>{e.incomeType}</Table.Cell>
                  <Table.Cell>{e.frequency}</Table.Cell>
                  <Table.Cell>{e.incomeAmount}</Table.Cell>
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
