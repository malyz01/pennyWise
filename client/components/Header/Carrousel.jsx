import React from 'react'
import Slider from 'react-slick'
import slide1 from './images/image1.jpg'
import slide2 from './images/image2.jpg'
import slide3 from './images/image3.jpg'

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  return (
    <div
      className="carrouselWrapper"
      style={{
        background: 'red',
        // height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}
    >

      <Slider {...settings}>
        <div>
          <div
            className="carrouselImage"
            style={{
              background: `url(${slide1})`,
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div>
          <div
            className="arrouselImage"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div>
          <div
            className="arrouselImage"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>

      </Slider>

    </div>
  )
}

export default Carrousel
