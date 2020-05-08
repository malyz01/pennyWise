import React, { Component } from 'react'

import Header from './Header'
import Table from './Table'
import ModalForm from './ModalForm'

export class index extends Component {
  render () {
    return (
      <div className="expense">
        <Header />
        <Table />
        <ModalForm />
      </div>
    )
  }
}

export default index
