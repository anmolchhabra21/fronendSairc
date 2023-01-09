import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, ButtonGroup, Dropdown, Image } from 'react-bootstrap'

import NotificationBell from './NotificationBell'
import SearchBar from './SearchBar'

import { logoutUser } from '../../redux/actions/auth'
import { isLoggedIn } from '../../utils/auth'
import BrowserStore from '../../utils/BrowserStore'

import '../../styles/topbar.css'

import logo from '../../assets/images/logos/logo-without-text.png'

const mql = window.matchMedia('(min-width: 800px)')

class Topbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      bigScreen: mql.matches
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
  }

  componentDidMount () {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount () {
    mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged () {
    this.setState({ bigScreen: mql.matches })
  }

  handleClickOnLogo (ev) {
  }

	render() {
		const loginnedUser = BrowserStore.get('user-info', true);	
		return (
	    <div 
	    	className="topbar-container d-flex"
	    	style={{
	    		position: (this.props.fixed ? 'fixed' : 'sticky'), 
	    		zIndex: '3',
	    		paddingLeft: this.state.bigScreen ? '10px' : '0px',
	    		paddingTop: '20px',
	    		paddingBottom: '20px',
	    		height: this.props.height || '10vh',
	    		background: this.props.bg
	    	}}
      >
        <div
			  	// fluid
          style={{
			  		marginRight: this.state.bigScreen ? '20px' : '3px',
			  		marginLeft: this.state.bigScreen ? '10px' : '3px', 
			  	}} 
			  	className="d-flex flex-row container-fluid align-items-center">
			  	{this.state.bigScreen && this.props.showLogo ? 
			  		<Nav>
			  			<Nav.Link href={isLoggedIn() ? '/feed' : '/'}>
			  				<Image
					  			src={logo} 
					  			alt={'Logo of ISM Connect'} 
					  			height="61px" 
					  			width="61px" style={{marginRight: '10px'}} />
			  			</Nav.Link>
				  	 </Nav> : null 
				  } 
				  <Nav>
				  	<SearchBar bigScreen={this.state.bigScreen} query={this.props.query}
					  handleResult = {this.props.handleResult}
					   />
				  </Nav>
			  	<Nav style={{ marginLeft: 'auto', fontSize: this.state.bigScreen ? '16px' : '12px' }}>
			      <NotificationBell notifications={this.props.notifications} />
			    </Nav>
			    	<Nav>
			      <Dropdown id="collasible-nav-dropdown" as={ButtonGroup} drop={'left'}>
			        <Dropdown.Toggle 
			        	as="div" 
			        	variant="outline-success" 
			        	size="sm" 
			        	className={"caret-off bg-white" 
			        		+ (this.state.bigScreen ? 
			        				        			' border-blue p-2 shadow profile-card' : '')}>
						    <div className="d-flex flex-row">

			      			{this.state.bigScreen ? <div className="d-flex flex-column mr-1">
			      				<div style={{ fontSize: '12px' }}>{this.props.profileName}</div>
			      				<div className="text-muted" style={{fontSize: '10px'}}>Alchemist</div>
			      			</div> : null}
			      			<div className="d-flex align-items-center">
			      				<Image 
						    			src={loginnedUser?(loginnedUser["image"]||loginnedUser["linkedinImage"]||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" }
						    			roundedCircle 
						    			width="40px"
						    			height="40px"
						    			style={{
						    				border: '3px solid #c14b47',
						    				boxSizing: 'border-box',
						    				objectFit: 'cover',
						    				margin: '0 3px 0 3px'
						    			}}
                    />
                  </div>

                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#' onClick={() => { this.props.logoutUser() }}>Log out</Dropdown.Item>
                <Dropdown.Item href={'/profile/' + JSON.parse(BrowserStore.get('user-info')).id}>Profile</Dropdown.Item>
                <Dropdown.Item href='/feed'>Feed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </div>
	  )
  }
}

export default connect(null, { logoutUser })(Topbar)
