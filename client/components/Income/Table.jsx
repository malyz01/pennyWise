import React, { Component } from 'react'
import { Table, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

import './income.css'
import { getUserIncome } from '../../store/actions/income'

export class incomeTable extends Component {
  componentDidMount () {
    const { getUserIncome } = this.props
    getUserIncome(this.props.userId)
  }

  render () {
    const { data } = this.props.userData
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
                data && data.map(item => {
                  return (
                    <Table.Row key={item.id}>
                      <Table.Cell><input type="checkbox"/></Table.Cell>
                      <Table.Cell>Main</Table.Cell>
                      <Table.Cell>{item.incomeType}</Table.Cell>
                      <Table.Cell>Weekly</Table.Cell>
                      <Table.Cell>{item.incomeAmount}</Table.Cell>
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

const mapStateToProps = state => {
  return {
    userData: state.income,
    userId: state.auth.user.id
  }
}

const mapDispatchToProps = {
  getUserIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(incomeTable)
