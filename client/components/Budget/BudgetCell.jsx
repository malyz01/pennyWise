import React, { Component } from 'react'
import './budget.css'
import Fade from 'react-reveal/Fade'
import { addCommas } from '../helpers'
class BudgetCell extends Component {
  state = {
    item: this.props.item,
    percentStart: 0,
    percentFinish: 0,
    tempStart: 0
  }

  updateBudget (total) {
    this.setState({
      percentFinish: total,
      tempStart: this.state.percentStart
    }, this.percentage)
  }

  percentage = () => {
    if (this.state.percentStart < this.state.percentFinish) {
      this.setState({
        percentStart: this.state.percentStart + 1
      }, () => setTimeout(() => {
        this.percentage()
      }, 2000 / (this.state.percentFinish - this.state.tempStart)))
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.item.currentAmount !== prevProps.item.currentAmount) {
      this.setState({ item: this.props.item }, () => {
        this.updateBudget((this.state.item.currentAmount / this.state.item.targetBudget) * 100)
      })
    }
  }

  getColor = (ratioOfCompletion) => {
    if (ratioOfCompletion >= 1) {
      return `rgba(${26},${186},${111},${ratioOfCompletion})`
    }
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
                {addCommas((this.state.percentStart), true)}
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
