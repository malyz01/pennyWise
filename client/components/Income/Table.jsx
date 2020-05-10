import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

import './income.css'
import { selectUserIncome } from '../../store/actions/income'

export class incomeTable extends Component {
  handleOnSelect = e => () => {
    const {
      data: { selected },
      selectUserIncome
    } = this.props
    if (selected && selected.id === e.id) return selectUserIncome(null)
    selectUserIncome(e)
  }

  render () {
    const { income, selected } = this.props.data
    const select = selected || { id: 0 }
    return (
      <Fade>
        <Container className='incomeTable'>
          <Table inverted selectable singleLine>
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
                <Table.Row className='pointerCursor'
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

const mapDispatchToProps = {
  selectUserIncome
}

export default connect(null, mapDispatchToProps)(incomeTable)
