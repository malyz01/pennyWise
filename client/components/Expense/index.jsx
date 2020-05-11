import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
import ModalForm from './ModalForm'
import { getUserExpenses } from '../../store/actions/expense'
import Loading from '../Loading'
import { loading } from '../../store/actions/loading'

export class Expense extends Component {
  componentDidMount () {
    this.props.getUserExpenses(this.props.userId)
  }

  componentWillUnmount () {
    this.props.loading('expense', true)
  }

  render () {
    const { userId, expenses, selected } = this.props
    if (this.props.load) return <Loading />
    return (
      <div className="expense">
        <Header />
        <Table data={{ userId, expenses, selected }} />
        <ModalForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  load: state.loading.expense,
  userId: state.auth.user.id,
  expenses: state.expense.all,
  selected: state.expense.selected
})

export default connect(mapStateToProps, { getUserExpenses, loading })(Expense)
