import React, { Component } from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'

class NoticesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notices: []
    }
  }

  render () {
    const items = this.props.notice || []
    return (
      <>
        <Card className='text-left rounded shadow mb-2'>
          <Card.Header as='h5' className='text-blue'>NOTICEBOARD</Card.Header>
          <Card.Body>
            <ListGroup>
              {(items || []).map((i, idx) => {
							  return (
  <ListGroup.Item
    key={idx}
    as='li'
    className='d-flex justify-content-between align-items-start'
  >
    <div className='d-flex flex-row' style={{ padding: '8px' }}>
      <div className='d-flex align-items-center' style={{ paddingRight: '20px' }}>
        <Image
          src={i.image}
          roundedCircle
          width='85px'
          height='85px'
        />
      </div>
      <div className='d-flex flex-column text-sm-left justify-content-center' style={{ textAlign: 'left' }}>
        <div className='h6 text-muted' style={{ fontSize: '16px' }}>
          {i.heading}
        </div>
        <div className='small text-sm-left' style={{ fontSize: '12px' }}>
          {i.content}
        </div>
      </div>
    </div>
  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Card.Body>
          <Card.Footer className='bg-blue fw-bold text-light'>Show More ... </Card.Footer>
        </Card>
      </>
    )
  }
}

export default NoticesList
