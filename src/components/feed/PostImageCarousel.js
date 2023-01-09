import { Component } from 'react'
import { Carousel, Image } from 'react-bootstrap'

import academicBuilding from '../../assets/images/campus/academic-complex-skyline.jpg'
import bg1 from '../../assets/images/campus/bg-1.jpeg'
import adminComplex from '../../assets/images/campus/admin-complex.jpg'

const items = [
  {
    image: academicBuilding,
    heading: 'First slide',
    subheading: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    image: bg1,
    heading: 'Second slide label',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: adminComplex,
    heading: 'Third slide label',
    subheading: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
]

class PostImageCarousel extends Component {
  render () {
    return (
      <Carousel fade>
        {
          (this.props.items || items).map((it, idx) => {
            return (
              <Carousel.Item key={idx}>
                <Image
                  className='d-block post-carousel-image'
                  src={it.image_path}
                  alt={it.heading}
                />
                {/* <Carousel.Caption className="carousel-caption-container">
                  <h3 className="carousel-caption-heading">{it.heading}</h3>
                  <p className="carousel-caption-subheading">{it.subheading}</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    )
  }
}

export default PostImageCarousel
