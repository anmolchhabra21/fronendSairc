import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

import ConnectButton from '../feed/ConnectButton'
import ViewProfileButton from '../common/ViewProfileButton'

export default class PeopleResult extends Component {
  render () {
    const { result: i } = this.props
    return (
      <div
        className='search-result-container container-fluid d-flex flex-row'
        style={{
				  height: this.props.bigScreen ? '100px' : '70px'
        }}
        onClick={() => this.props.handleClick('profile', i.id)}
      >
        <div className='d-flex align-items-center'>
          <Image
            src={i.image ||
	    				'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'}
            roundedCircle
            width={this.props.bigScreen ? '65px' : '50px'}
            height={this.props.bigScreen ? '65px' : '50px'}
            style={{
	    				border: '3px solid purple',
	    				boxSizing: 'border-box',
	    				objectFit: 'cover',
	    				marginRight: '10px'
	    			}}
          />
        </div>
        <div
          className='d-flex flex-column justify-content-center'
          style={{ textAlign: 'left' }}
        >
          <div
            className='fw-bold'
            style={{
						  fontSize: this.props.bigScreen ? '18px' : '15px'
            }}
          >
            {i.name}
          </div>
          <div
            className='text-muted'
            style={{
			    		fontSize: this.props.bigScreen ? '16px' : '13px'
			    	}}
          >
            {i.heading}
          </div>
        </div>
        <div
          className='d-flex text-center align-items-center search-result-connect-container'
        >
          <div style={{ marginRight: '5px' }}>
            <ConnectButton
              size={this.props.bigScreen ? 'lg' : 'md'}
              border='2px solid #05438b'
              background='#05438b'
              colorClass='text-white'
            />
          </div>
          {this.props.bigScreen ? <div style={{ marginLeft: '5px' }}>
            <ViewProfileButton
              size={this.props.bigScreen ? 'lg' : 'md'}
              border='2px solid #05438b'
            />
          </div> : null}
        </div>
      </div>
    )
  }
}
