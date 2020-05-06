import React, {Component} from "react";
import './carousel.css'

let items = [
  'Tools To manage Your Expenses',
  'Tools To manage Your Budget',
  'Tools To manage Your Mom'
]

export default class Carousel extends Component {
  state = {
    currentIndex: 0,

  }

  prev = () => {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    } else {
      this.setState({currentIndex: items.length - 1})
    }
  }

  next = () => {
    if (this.state.currentIndex < items.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    } else {
      this.setState({currentIndex: 0})
    }
  }

  setIndex = index => {
    this.setState({ currentIndex: index })
  }

  render() {
    return (
      <div className='carousel'>
      <div className='carousel-main'>
        <div
          onClick={this.prev}
          className={`arrows ${
            this.state.currentIndex > 0 ? `visible` : `hidden`
          }`}>
          <i className='fas fa-arrow-circle-left'></i>
        </div>
        <p>{items[this.state.currentIndex]}</p>
        <div
          onClick={this.next}
          className={`arrows ${
            this.state.currentIndex < items.length - 1
              ? `visible`
              : `hidden`
          }`}>
          <i className='fas fa-arrow-circle-right'></i>
        </div>
      </div>
      <div className='carousel-index'>
        {items.map((item, index) => {
          return (
            <i key ={index}
              onClick={() => this.setIndex(index)}
              className={`fab fa-react ${
                this.state.currentIndex === index ? `visible` : `hidden`
              }`}></i>
          )
        })}
      </div>
    </div>
    )
  }
}
