import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import './income.css'
import {
  setModalIncomeForm,
  setModalIncomeOpen
} from '../../store/actions/modal'

class Header extends Component {
  handleOnClick = action => () => {
    const { setModalIncomeForm, setModalIncomeOpen } = this.props
    if (action === 'Add Income' || action === 'Update Income') {
      setModalIncomeForm(action)
      setModalIncomeOpen(true)
    }
  }

  render () {
    return (
      <Container className='incomeHeader'>
        <div className='incomeButtons'>
          <button
            onClick={this.handleOnClick('Add Income')}
            className='ui button add incomeAdd'
          >
            ADD INCOME
          </button>
          {this.props.selected && (
            <>
              <button className='ui button  incomeAdd'>ON/OFF</button>
              <button
                onClick={this.handleOnClick('Update Income')}
                className='ui button incomeAdd'
              >
                UPDATE
              </button>
              <button className='ui button  incomeAdd'>DELETE</button>
            </>
          )}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.income.selected
})

const mapDispatchToProps = {
  setModalIncomeOpen,
  setModalIncomeForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
