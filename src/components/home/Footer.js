import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

import '../../styles/landing/footer.css'

import logo from '../../assets/images/campus/ismlogo.png'

export default class Footer extends Component {
  render () {
    return (
      <div className='container-fluid parallax landing-footer-container d-flex'>
        <div className='landing-footer-container-inner'>
          <div className='container landing-footer-image-container'>
            <div className='landing-footer-image-container-inner'>
              <Image src={logo} className='landing-footer-image' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
