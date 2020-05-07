import React, { Component } from 'react'
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
    this.setState({ visible: false }, () => {
      setTimeout(() => {
        this.setState({ visible: true })
      }, 500)
    })

    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    } else {
      this.setState({ currentIndex: items.length - 1 })
    }
  }

  next = () => {
    this.setState({ visible: false }, () => {
      setTimeout(() => {
        this.setState({ visible: true })
      }, 500)
    })

    if (this.state.currentIndex < items.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    } else {
      this.setState({ currentIndex: 0 })
    }
  }

  setIndex = index => {
    this.setState({ currentIndex: index })
  }

  render () {
    return (
      <div className='landingCarousel'>
        <div className='landingCarouselMain'>
          <div
            onClick={this.prev}
            className={`landingArrows `}>
            <i className='fas fa-arrow-circle-left'></i>
          </div>
          <Transition.Group animation={this.state.animation} duration={this.state.duration}>
            {this.state.visible && (
              <p>{items[this.state.currentIndex]}</p>
            )}
          </Transition.Group>
          <div
            onClick={this.next}
            className={`landingArrows `}>
            <i className='fas fa-arrow-circle-right'></i>
          </div>
        </div>
        <div className='landingCarouselIndex'>
          {items.map((item, index) => {
            return (
              <img key ={index}
                onClick={() => this.setIndex(index)}
                className={`landingCarouselIcon ${
                  this.state.currentIndex === index ? `visible` : `hidden`
                }`}src="./images/pennywise_logo.png" alt=""/>

            )
          })}
        </div>
      </div>
    )
  }
}
