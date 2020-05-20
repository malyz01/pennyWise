import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
import BarGraph from '../BarGraph'
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

         validateIncome = (expense) => {
           let i = { ...expense }
           if (i.active) {
             if (i.frequency === 'Monthly') {
               i.expenseAmount = (i.expenseAmount * 12) / 52
             }
             if (i.frequency === 'Annually') {
               i.expenseAmount = i.expenseAmount / 52
             }
           } else {
             i.expenseAmount = 0
             i.expenseName = `${i.expenseName} \n (OFF)`
           }
           return { name: i.expenseName, Expense: i.expenseAmount }
         }

         render () {
           const { userId, expenses, selected } = this.props
           if (this.props.load) return <Loading />
           const graphData = expenses.map(this.validateIncome)
           return (
             <div className="expense">
               <Header />
               <Table data={{ userId, expenses, selected }} />
               <BarGraph dKey="Expense" data={graphData} />
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
