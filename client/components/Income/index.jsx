import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
import ModalForm from './ModalForm'
import { getUserIncome } from '../../store/actions/income'

export class Income extends Component {
  componentDidMount () {
    const { getUserIncome } = this.props
    getUserIncome(this.props.userId)
  }

  totalIncome () {
    const { data } = this.props.userData
    let total = 0
    data &&
      data.map(item => {
        total += item.incomeAmount
      })
    return total
  }

  render () {
    const { userId, income, selected } = this.props
    return (
      <div className='income'>
        <Header />
        <Table data={{ userId, income, selected }} />
        <ModalForm />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userId: state.auth.user.id,
  income: state.income.all,
  selected: state.income.selected
})

export default connect(mapStateToProps, { getUserIncome })(Income)
