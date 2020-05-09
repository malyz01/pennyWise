import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getUserIncome } from '../../store/actions/income'
import './income.css'

class Header extends Component {
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
    return (
      <Container className='incomeHeader'>
        <div className='incomeHeaderTitle'>OVERVIEW OF INCOMES</div>
        <hr />
        <div className='incomeHeaderText'>
          Your total income is: {this.totalIncome()}
        </div>
        <div className='incomeButtons'>
          <button className='ui button add incomeAdd'>ADD NEW</button>
          <button className='ui button incomeAdd'>ON/OFF</button>
          <button className='ui button incomeAdd'>UPDATE</button>
          <button className='ui button incomeAdd'>DELETE</button>
        </div>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
