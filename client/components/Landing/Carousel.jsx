import React, { Component } from 'react'
import './carousel.css'
import { Transition } from 'semantic-ui-react'

const items = [
  {
    // text: 'Tools To Manage Your Expenses',
    img: '/images/expense-carousel.png'
  },
  {
    // text: 'Tools To Manage Your Income',
    img: '/images/income-carousel.png'
  },
  {
    // text: 'Tools To Manage Your Budget',
    img: '/images/budget-0-carousel.png'
  },
  {
    // text: 'Tools To Manage Your Budget',
    img: '/images/budget-1-carousel.png'
  },
  {
    // text: 'Tools To Manage Your Budget',
    img: '/images/budget-2-carousel.png'
  }
]

export default class Carousel extends Component {
  state = {
    currentIndex: 0,
    animation: 'fade',
    duration: 500,
    visible: true,
    rightArrow: true,
    leftArrow: true,
    iconToggle: true
  }

  prev = () => {
    if (this.state.leftArrow === true) {
      if (this.state.currentIndex > 0) {
        this.setState({ currentIndex: this.state.currentIndex - 1 })
      } else if (this.state.leftArrow === true) {
        this.setState({ currentIndex: items.length - 1 })
      }

      this.setState({ visible: false, leftArrow: false }, () => {
        setTimeout(() => {
          this.setState({ visible: true })
        }, 500)
        setTimeout(() => {
          this.setState({ leftArrow: true })
        }, 1000)
      })
    }
  }

  next = () => {
    if (this.state.rightArrow === true) {
      if (this.state.currentIndex < items.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 })
      } else {
        this.setState({ currentIndex: 0 })
      }
      this.setState({ visible: false, rightArrow: false }, () => {
        setTimeout(() => {
          this.setState({ visible: true })
        }, 500)
        setTimeout(() => {
          this.setState({ rightArrow: true })
        }, 1000)
      })
    }
  }

  setIndex = index => {
    if (this.state.iconToggle === true) {
      this.setState({ currentIndex: index })

      this.setState({ visible: false, iconToggle: false }, () => {
        setTimeout(() => {
          this.setState({ visible: true })
        }, 500)
        setTimeout(() => {
          this.setState({ iconToggle: true })
        }, 1000)
      })
    }
  }

  render () {
    return (
      <div className="landingCarouselOuter">
        <h1 className="landingCarouselTitle">Services We Provide</h1>
        <div className='landingCarousel'>

          <div className='landingCarouselMain'>
            <div
              onClick={this.prev}
              className={`landingArrows landingLeft`}>
              <i className="angle left icon"></i>
            </div>
            <Transition.Group animation={this.state.animation} duration={this.state.duration}>
              {this.state.visible && (
                <div className="landingCarouselItem">
                  <div className="landingCarouselInner">
                    <img src={items[this.state.currentIndex].img} alt=""/>
                    <div className="landingCarouselText">{items[this.state.currentIndex].text}</div>
                  </div>
                </div>
              )}
            </Transition.Group>
            <div
              onClick={this.next}
              className={`landingArrows landingRight`}>
              <i className="angle right icon"></i>
            </div>
          </div>
          <div className='landingCarouselIndex'>
            {items.map((item, index) => {
              return (

                <div key ={index}
                  onClick={() => this.setIndex(index)}
                  className={`landingCarouselIcon ${
                    this.state.currentIndex === index ? `visible` : `hidden`
                  }`}>

                </div>

              )
            })}
          </div>
        </div>
      </div>

    )
  }
}
