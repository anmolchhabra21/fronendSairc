import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/landing/contribute.css'

export default class Contribute extends Component {
  render () {
    return (
      <div className='container-fluid parallax landing-contribute-container'>
        <div className='landing-contribute-heading-container'>
          <div>
            <h1 className='landing-contribute-heading'>INTERESTED IN HELPING YOUR INSTITUTE?</h1>
          </div>
        </div>
        <div className='landing-contribute-subheading-container'>
          <div>
            <h1 className='landing-contribute-subheading'>REACH OUT TODAY TO SUPPORT YOUR ALMA MATER!</h1>
          </div>
        </div>

        <Link to='/' className='landing-contribute-button'>
          <div className='landing-contribute-button-container'>
            <div className='landing-contribute-button-container-inner'>
              CONTRIBUTE
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
