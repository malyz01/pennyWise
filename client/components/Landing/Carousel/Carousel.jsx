import React, {Component} from "react";
import './carousel.css'
import { Transition } from 'semantic-ui-react'

const items = [
  'Tools To manage Your Expenses',
  'Tools To manage Your Budget',
  'Tools To manage Your Mom'
]

export default class Carousel extends Component {
  state = {
    currentIndex: 0,
    animation: 'fade',
    duration: 500,
    visible: true
  }

  prev = () => {
    this.setState({visible: false}, () => {
      setTimeout(() => {
        this.setState({visible: true})
      }, 500)
    })

    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    } else {
      this.setState({currentIndex: items.length - 1})
    }
  }

  next = () => {
    this.setState({visible: false}, () => {
      setTimeout(() => {
        this.setState({visible: true})
      }, 500)
    })

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
          className={`arrows `}>
          <i className='fas fa-arrow-circle-left'></i>
        </div>
        <Transition.Group animation={this.state.animation} duration={this.state.duration}>
          {this.state.visible && (
            <p>{items[this.state.currentIndex]}</p>
          )}
        </Transition.Group>
        <div
          onClick={this.next}
          className={`arrows `}>
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
