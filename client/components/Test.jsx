import React, { Component } from 'react'

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

class Test extends Component {
  state = {
    totalNum: 0
  }

  onClick = () => {
    this.setState({ totalNum: arr.reduce((a, v) => a + v, 0) })
  }

  render () {
    return (
      <>
      <button onClick={this.onClick}>click me</button>
      <div style={{ fontSize: '20px' }}>
          Total Num: {this.state.totalNum}
      </div>
      </>
    )
  }
}

export default Test
