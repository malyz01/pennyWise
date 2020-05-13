import React from 'react'
import Slider from 'react-slick'

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000
  }

  return (
    <div
      className="carrouselWrapper"
      style={{
        overflow: 'hidden'
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrouselImage"
            style={{
              background: 'url(/images/slide1.png)',
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carrouselImage"
            style={{
              background: 'url(/images/slide2.jpg)',
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrouselImage"
            style={{
              background: 'url(/images/slide3.jpg)',
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carrousel
