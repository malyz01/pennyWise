import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
import ModalForm from './ModalForm'
import { getUserExpenses } from '../../store/actions/expense'

export class Expense extends Component {
  componentDidMount () {
    const { getUserExpenses, userId } = this.props
    getUserExpenses(userId)
  }

  render () {
    const { userId, expenses, selected } = this.props
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
  userId: state.auth.user.id,
  expenses: state.expense.all,
  selected: state.expense.selected
})

export default connect(mapStateToProps, { getUserExpenses })(Expense)
