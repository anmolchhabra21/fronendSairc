import React, { Component } from 'react'

import '../../styles/landing/parallaxQuote.css'

export default class ParallaxQuote extends Component {
  render () {
    return (
      <div className='container-fluid d-flex justify-content-center parallax parallax-quote-container'>
        <div className='parallax-quote-text-container'>
          <div className='parallax-quote-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque diam non nisl pellentesque maximus. Maecenas efficitur eros in erat commodo ultrices. Cras in eros ullamcorper, laoreet ipsum eu, feugiat justo. Integer mauris erat, porta nec posuere a, feugiat non magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque diam non nisl pellentesque maximus. Maecenas efficitur eros in erat commodo ultrices. Cras in eros ullamcorper, laoreet ipsum eu, feugiat justo. Integer mauris erat, porta nec posuere a, feugiat non magna.
            </p>
          </div>
          <div className='parallax-quote-text-button-container'>
            <button className='parallax-quote-text-button'>
              Generate your digital ID Card
            </button>
          </div>
        </div>
      </div>
    )
  }
}
