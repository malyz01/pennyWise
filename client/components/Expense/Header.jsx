import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './expense.css'
class Header extends Component {
  render () {
    return (
      <Container className = "expenseHeader">
        <div>OVERVIEW OF EXPENSES</div>
        <div />
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cumque exercitationem sequi expedita cupiditate error nam laudantium ut quo quasi rerum eaque fuga odit, laborum facilis mollitia impedit dolore corporis!</div>
      </Container>
    )
  }
}

export default Header
