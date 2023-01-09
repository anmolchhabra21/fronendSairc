import { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class ComingSoonPost extends Component {
  render () {
    return (
      <div className='post mx-auto shadow'>
        <Card className='post-card'>
          <div className='d-flex flex-column'>
            <div className='d-flex flex-row align-items-center justify-content-center'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='fw-bold' style={{ color: '333' }}>
                  Coming soon!
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
