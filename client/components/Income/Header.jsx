import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './income.css'
class Header extends Component {
  render () {
    return (
      <Container className = "incomeHeader">
        <div className ="incomeHeaderTitle">OVERVIEW OF INCOMES</div>
        <hr />
        <div className="incomeHeaderText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cumque exercitationem sequi expedita cupiditate error nam laudantium ut quo quasi rerum eaque fuga odit, laborum facilis mollitia impedit dolore corporis!</div>
        <div className="incomeButtons">
          <button className="ui button add incomeAdd">
            ADD NEW
          </button>
          <button className="ui button incomeAdd">
            ON/OFF
          </button>
          <button className="ui button incomeAdd">
           UPDATE
          </button>
          <button className="ui button incomeAdd">
            DELETE
          </button>
        </div>

      </Container>
    )
  }
}

export default Header
