import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getUserExpense } from '../../store/actions/expense'
import './expense.css'

class Header extends Component {
  componentDidMount () {
    const { getUserExpense } = this.props
    getUserExpense(this.props.userId)
  }

  totalExpense () {
    const { data } = this.props.userData
    let total = 0
    data &&
      data.map(item => {
        total += item.expenseAmount
      })
    return total
  }
  render () {
    return (
      <Container className='expenseHeader'>
        <div className='expenseHeaderTitle'>OVERVIEW OF EXPENSES</div>
        <hr />
        <div className='expenseHeaderText'>
          Your total expense is: {this.totalExpense()}
        </div>
        <div className='expenseButtons'>
          <button className='ui button add expenseAdd'>ADD NEW</button>
          <button className='ui button  expenseAdd'>ON/OFF</button>
          <button className='ui button expenseAdd'>UPDATE</button>
          <button className='ui button  expenseAdd'>DELETE</button>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.expense,
    userId: state.auth.user.id
  }
}

const mapDispatchToProps = {
  getUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
