import React from 'react'
import Slider from 'react-slick'

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
            <h1
              style={{
                height: '170px',
                color: '#fff',
                marginBottom: '300px',
                textAlign: 'center',
                textTransform: 'uppercase',
                padding: '21px 70px 0px 70px',
                fontSize: '40px',
                textShadow: '2px 2px #000'
              }}
            >
              Make your money work for you and achieve your goals.
            </h1>
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
          >
            <h1
              style={{
                height: '170px',
                marginBottom: '300px',
                textAlign: 'center',
                textTransform: 'uppercase',
                padding: '21px 70px 0px 70px',
                fontSize: '40px',
                textShadow: '2px 2px #808080'
              }}
            >There can be heaps of uncertainty - but there are things you can do as you look for your next opportunity.</h1></div>
        </div>
        <div>
          <div
            className="carrouselImage"
            style={{
              background: 'url(/images/slide3.jpg)',
              height: `${window.innerHeight}px`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ><h1
              style={{
                height: '170px',
                color: '#fff',
                marginBottom: '300px',
                textAlign: 'center',
                textTransform: 'uppercase',
                padding: '21px 70px 0px 70px',
                fontSize: '40px',
                textShadow: '2px 2px #000'
              }}
            >
              COVID-19 spells change, but the disruption offers an opprtunity to reshape our lives for the better.</h1></div>
        </div>
      </Slider>
    </div>
  )
}

export default Carrousel
