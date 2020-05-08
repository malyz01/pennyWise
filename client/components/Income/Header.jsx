import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './income.css'
class Header extends Component {
  render () {
    return (
      <Container className = "expenseHeader">
        <div className ="expenseHeaderTitle">OVERVIEW OF EXPENSES</div>
        <hr />
        <div className="expenseHeaderText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cumque exercitationem sequi expedita cupiditate error nam laudantium ut quo quasi rerum eaque fuga odit, laborum facilis mollitia impedit dolore corporis!</div>
        <div className="expenseButtons">
          <button className="ui button white expenseAdd">
            ADD EXPENSE
          </button>
          <button className="ui button purple expenseAdd">
            ON/OFF
          </button>
          <button className="ui button blue expenseAdd">
           UPDATE
          </button>
          <button className="ui button black expenseAdd">
            DELETE
          </button>
        </div>

      </Container>
    )
  }
}

export default Header
