import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
import ModalForm from './ModalForm'
import Loading from '../Loading'
import { getUserIncome } from '../../store/actions/income'
import { loading } from '../../store/actions/loading'

export class Income extends Component {
  async componentDidMount () {
    this.props.loading(true)
    await this.props.getUserIncome(this.props.userId)
    this.props.loading(false)
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
    if (!this.props.loading) return <Loading />
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
  loading: state.loading,
  userId: state.auth.user.id,
  income: state.income.all,
  selected: state.income.selected
})

export default connect(mapStateToProps, { getUserIncome, loading })(Income)
