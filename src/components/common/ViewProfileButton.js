import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ViewProfileButton extends Component {
  render () {
    return (
      <div>
        <Button
          variant='outline-primary'
          size={this.props.size || 'sm'}
          style={{
					  border: this.props.border || '1px solid #c14b47',
					  background: this.props.background || 'white',
					  fontWeight: 'bold',
					  boxSizing: 'border-box',
					  borderRadius: '8px'
          }} className={this.props.colorClass || 'text-dark'}
        >
          VIEW PROFILE
        </Button>
      </div>
    )
  }
}
