import React, { Component } from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

import { isLoggedIn } from '../../utils/auth'

import logo from '../../assets/images/campus/ismlogo.png'
// import smallLogo from '../../assets/images/logos/left-dash-logo-without-bg-with-text.png'
import smallLogo from '../../assets/images/campus/ISM.png'

class FixedTopbar extends Component {

  onScroll = (ev) => {
    if (window.scrollY >= 250) {
      this.props.handleScroll('blue', '60px')
    } else {
      this.props.handleScroll('transparent')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    const bigScreen = this.props.bigScreen
    let navbarProps = {}
    Object.assign(navbarProps, this.props)

    navbarProps.bigScreen = undefined
    navbarProps.handleScroll = undefined
    navbarProps.handleSidebarToggle = undefined

    return (
      <Navbar fixed="top" variant={this.props.variant} bg={ this.props.bg } style={{ 
        width: '100vw', 
        height: this.props.height, 
        transition: '1s all' 
      }}>
        <div className="container-fluid">
          <Navbar.Brand href="#home">
          <div className="d-flex flex-row">
            {bigScreen ? <div style={{ padding: '5px', paddingLeft: '10px' }}>
              <Image src={logo} height="60px"  />
            </div> : <div style={{ padding: '5px' }}>
              <Image src={smallLogo} height="50px" />
            </div>}
          </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to={isLoggedIn() ? '/feed' : '/enter'}>
                <span className="p-3 bg-white text-dark fw-bold" style={{ 
                  fontSize:'16px', borderRadius: '15px' }}>{isLoggedIn() ? 'GO TO APP' : 'SIGN IN'}</span>
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <span 
                id="landing-topbar-burger"
                className="p-3 text-white fw-bold" 
                style={{ fontSize: bigScreen ? '24px' : '16px' }}
                onClick={this.props.handleSidebarToggle}>
                <FontAwesomeIcon icon={icons.faBars} /> {bigScreen ? 'Menu' : ''}
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default FixedTopbar
