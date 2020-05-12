import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Table from './Table'
// import LineGraph from './LineGraph'
// import BarGraph from './BarGraph'
import Loading from '../Loading'
import { getUserIncome } from '../../store/actions/income'
import { loading } from '../../store/actions/loading'

export class Income extends Component {
  componentDidMount () {
    this.props.getUserIncome(this.props.userId)
  }

  componentWillUnmount () {
    this.props.loading('income', true)
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
    if (this.props.load) return <Loading />
    const graphData = income.map(i => ({
      name: i.incomeName,
      Income: i.incomeAmount
    }))
    return (
      <div className='income'>
        <Header />
        <Table data={{ userId, income, selected }} />
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LineGraph data={graphData} />
          <BarGraph data={graphData} />
        </div> */}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  load: state.loading.income,
  userId: state.auth.user.id,
  income: state.income.all,
  selected: state.income.selected
})

export default connect(mapStateToProps, { getUserIncome, loading })(Income)
