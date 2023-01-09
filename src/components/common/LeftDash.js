import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Image, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

import FixedFooter from './FixedFooter'

import '../../styles/sidebar/leftDash.css'

import bigLogo from '../../assets/images/logos/left-dash-logo-without-bg-with-text.png'
import bigLogoWithoutText from '../../assets/images/logos/left-dash-logo-without-bg.png'

const mql = window.matchMedia('(min-width: 800px)')

const items = [
  {
    name: 'Home',
    pathname: '/',
    icon: icons.faHome
  },
  {
    name: 'Feed',
    pathname: '/feed',
    icon: icons.faNewspaper
  },
  {
    name: 'ISMites',
    pathname: '/profile',
    icon: icons.faUsers
  },
  {
    name: 'Search',
    pathname: '/search',
    icon: icons.faSearch
  }
]

class LeftDash extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: true,
      bigScreen: mql.matches
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  componentDidMount () {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount () {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged () {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false, bigScreen: mql.matches })
  }

  isSelected (it) {
    return (it.pathname === window.location.pathname)
  }

  render () {
    const horizontal = this.props.horizontal === undefined ? true : this.props.horizontal
    const vertical = this.props.vertical === undefined ? true : this.props.vertical
    const menuItems = (this.props.items || items)

    const verticalDash = (
      <>
        <Link to='/feed'>
          <Image
            src={bigLogo}
            className='pr-4'
            fluid
            style={{
              boxSizing: 'border-box',
              objectFit: 'cover',
              paddingRight: '30px'
            }}
          />
        </Link>

        <ListGroup
          variant='flush'
          className='bg-transparent mt-4 mr-0 pr-0 ld-menu-list'
          style={{
            textAlign: 'left',
            borderRadius: '10px 0 0 10px'
          }}
        >
          {menuItems.map((it, idx) => {
            const selected = (it.pathname === window.location.pathname)
            const topRight = {}; const bottomRight = {}

            // OUTER CURVE (WORKS ONLY WITH WHITE BACKGROUND)
            // if (!selected) {
            //   if (idx > 0 && this.isSelected(menuItems[idx-1])) {
            //     topRight = { borderTopRightRadius: '15px' }
            //   }

            //   if ((idx < menuItems.length - 1) && this.isSelected(menuItems[idx + 1])) {
            //     bottomRight = { borderBottomRightRadius: '15px' }
            //   }
            // }

            return (
              <Link
                to={it.pathname}
                className={
                'ld-menu-item-link ' + (selected ? 'selected-menu-item-link' : '')
}
                style={{ ...topRight, ...bottomRight }}
                key={idx}
              >
                <ListGroup.Item className='d-flex flex-row align-items-center justify-content-start ld-menu-item' key={idx}>
                  <div className='ld-menu-item-text-icon'>
                    <span className='ld-menu-item-text'>
                      <FontAwesomeIcon icon={it.icon} />
                    </span>
                  </div>
                  <div className='ld-menu-item-text-container'>
                    <span className='ld-menu-item-text'>
                      {it.name}
                    </span>
                  </div>
                </ListGroup.Item>
              </Link>
            )
          })}
        </ListGroup>
      </>
    )

    const mainStyle = {
      display: 'flex',
      flexDirection: 'row',
      height: '60px',
      zIndex: '100'
    }
    const horizontalDash = (
      <div className='ld-horizontal-dash bg-blue'>
        <div className='ld-horizontal-dash-logo-block'>
          <div>
            <Link to='/feed'>
              <Image src={bigLogoWithoutText} height='35px' width='35px' roundedCircle />
            </Link>
          </div>
        </div>
        {(items || this.props.items).map((it, idx) => {
          return (
            <div className='ld-horizontal-dash-block' key={idx}>
              <div>
                <Link to={it.pathname}>
                  <span className='ld-horizontal-dash-block-item' style={{ color: 'white' }}>
                    <FontAwesomeIcon
                      icon={it.icon}
                    />
                  </span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    )

    return (
      this.state.bigScreen
        ? (vertical ? <div
            className='left-dash shadow-lg'
            id='left-dash'
            style={{
              width: this.state.sidebarDocked ? '18%' : '0px'
            }}
                      >
          {verticalDash}
                      </div> : null)
        : (horizontal
            ? <FixedFooter mainStyle={mainStyle} footerContent={horizontalDash} /> : null)
    )
  }
}

const mapStateToProps = state => ({
  leftDashOpen: state.dash.leftDashOpen,
  bigScreen: state.app.bigScreen
})

export default connect(mapStateToProps, null)(LeftDash)
