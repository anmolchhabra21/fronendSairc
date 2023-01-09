import React, { useEffect } from 'react'
import HeaderProfile from '../components/common/profile/HeaderProfile'
import SidebarProfile from '../components/event/LeftSidebar'
import BodyProfile from '../components/common/profile/BodyProfile'

const EventPage = (props) => {
  useEffect(() => {
    const func = () => {
      document.title = 'Event | ISM Connect'
    }
    func()
  }, [])
  const id = props.id;
  return (
    <div style={{ backgroundColor: '#eee' }}>
      <HeaderProfile />
      <div style={{ display: 'flex' }}>
        <SidebarProfile />
        <BodyProfile />
      </div>
    </div>
  )
}

export default EventPage
