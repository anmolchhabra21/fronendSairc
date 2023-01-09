import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Offcanvas, Container } from 'react-bootstrap'

import '../../styles/landing/offCanvasSidebar.css'

const items = [
  {
    label: 'Your Feed',
    url: '/feed'
  },
  {
    label: 'Search',
    url: '/search'
  },
  {
    label: 'Your profile',
    url: '/profile'
  },
  {
    label: 'Organisation page',
    url: '/organisation'
  },
  {
    label: 'Event page',
    url: '/event'
  }
]

export default class OffCanvasSidebar extends Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    const { handleSidebarToggle, isOpen } = this.props
    return (
      <>
        <Offcanvas show={isOpen} onHide={() => handleSidebarToggle(false)} placement='end'>
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Container>
              {
                (this.props.items || items).map((i, idx) => {
                  return (
                    <div key={idx}>
                      <Link to={i.url}>
                        <div className='offcsb-menu-item text-blue'>
                          {i.label}
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
}
