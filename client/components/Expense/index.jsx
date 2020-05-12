import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import Loading from '../Loading'
import { getUserExpenses } from '../../store/actions/expense'
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
    const graphData = expenses.map((i) => ({
      name: i.expenseName,
      Expense: i.expenseAmount
    }))
    return (
      <div className="expense">
        <Header />
        <Table data={{ userId, expenses, selected }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LineGraph data={graphData} />
          <BarGraph data={graphData} />
        </div>
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
