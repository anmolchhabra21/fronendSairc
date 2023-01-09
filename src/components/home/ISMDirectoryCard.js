import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default class ISMDirectoryCard extends Component {
  render () {
    return (
      <Card
        style={{
			  margin: this.props.bigScreen ? '40px' : '0',
			  borderRadius: this.props.bigScreen ? '40px' : '0',
			  boxSizing: 'border-box'
        }}
        className='join-network-card container'
      >
        <div className='d-flex flex-row ism-directory-card-inner'>
          <div className='d-flex flex-column join-network-text-container-outer'>
            <div className='join-network-text-container'>
              <p className='join-network-text text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut asperiores illum nulla modi aut voluptatibus culpa totam eum voluptatem. Dolor aliquid voluptate beatae cupiditate autem quae quibusdam mollitia unde!
              </p>
            </div>
            <div className='d-flex flex-row join-network-button-container-outer'>
              <div className='join-network-button-container d-flex justify-content-center'>
                <div style={{ width: '100%' }}>
                  <Link to='/enter' style={{ textDecoration: 'none', color: 'black' }}>
                    <div
                      className='join-network-button join-network-button-signin'
                    > Sign In
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center ism-directory-vector-container'>
            <div className='ism-directory-vector'>
              <span className='join-network-vector-text'>
                THE ISM <br /> DIRECTORY
              </span>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
