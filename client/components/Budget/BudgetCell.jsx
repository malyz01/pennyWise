import React, { Component } from 'react'
import './budget.css'
import Fade from 'react-reveal/Fade'

let count = 0

class BudgetCell extends Component {
  state = {
    item: this.props.item,
    percentStart: 0,
    percentFinish: 0
  }

  updateBudget (total) {
    this.setState({
      percentFinish: total
    })
    this.percentage()
  }

  percentage = () => {
    if (this.state.percentStart < this.state.percentFinish) {
      this.setState({
        percentStart: this.state.percentStart + 1
      })
    }
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.percentage()
    }, 30)
  }

  getColor = (ratioOfCompletion) => {
    return `rgba(${90},${3},${252},${ratioOfCompletion})`
  }

  render () {
    return (
      <div>

        <div className="budgetGraphRow">
          <div className="budgetGraphLabel">
            <p>{this.state.item.goalName}</p>
          </div>
          <div className="budgetGraphBarContainer">
            <div className="budgetGraphBar"
              style={{
                background: this.getColor(this.state.item.currentAmount / this.state.item.targetBudget),
                width: `${
                  (this.state.item.currentAmount / this.state.item.targetBudget) * 100
                }%`
              }}
            ></div>
            <Fade onReveal={() => this.updateBudget((this.state.item.currentAmount / this.state.item.targetBudget) * 100)}>
              <div className="budgetGraphBarRatio">
                {this.state.percentStart}
                            %
              </div>
            </Fade>

          </div>

        </div>

      </div>

    )
  }
}

export default BudgetCell
