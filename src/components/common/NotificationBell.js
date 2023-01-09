import React, { Component } from 'react'
import { ButtonGroup, Dropdown } from 'react-bootstrap'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let notifications = [
  {
 	text: <span> All caught up! 😊 </span>,
 	url: '#'
  }
]

export default class NotificationBell extends Component {
  render () {
    notifications = this.props.notifications || notifications
    notifications = notifications.map((n, idx) => {
      return <Dropdown.Item href={n.url} key={idx}>{n.name}</Dropdown.Item>
    })

		return (
			<Dropdown 
				id="collasible-nav-dropdown" 
				as={ButtonGroup} 
				style={{ cursor: 'pointer' }}>
        <Dropdown.Toggle 
        	as="div" 
        	variant="outline-success" 
        	size="sm" 
        	className="caret-off text-blue h5 px-4 py-4 md-0">
        	<div>
        		<FontAwesomeIcon icon={icons.faBell} style={{fontSize: '3rem' ,borderRadius:"50%", border: "white 2px solid" , padding: "4px", boxShadow: "0 0 5px var(--custom-blue)"}} />
        	</div>
		  	</Dropdown.Toggle>

        <Dropdown.Menu>
          {notifications}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
