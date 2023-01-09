import { Component } from 'react'
import NoticesList from '../feed/NoticesList'
import UsersList from '../feed/UsersList'

import { getUserSuggestions } from '../../data/userSuggestions'

const mql = window.matchMedia('(min-width: 800px)')

class RightDash extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: true
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
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  render () {
    // const MainContent = this.props.mainContent || ''
    const sidebar = (
      <>
        <UsersList users={getUserSuggestions(1)}
        />
        <NoticesList
          notices={[
            {
              heading: 'From today\'s featured article',
              content: 'Southampton Cenotaph is a WWI memorial in Southampton.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Southampton-Cenotaph.jpg/119px-Southampton-Cenotaph.jpg'
            },
            {
              heading: 'In the news',
              content: 'Chief of the Defence Staff of India dies.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bipin_Rawat_Chief_of_Defence_Staff_%28CDS%29.jpg/128px-Bipin_Rawat_Chief_of_Defence_Staff_%28CDS%29.jpg'
            },
            {
              heading: 'On this day',
              content: '1892 – The merger of Newcastle East and West End.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ottoman_surrender_of_Jerusalem_restored.jpg/122px-Ottoman_surrender_of_Jerusalem_restored.jpg'
            }
          ]} notice={this.props.notices}
        />
      </>
    )
    return (
      <div
        id='right-dash'
        style={{
          width: '34%',
          paddingRight: '20px',
          height: '100%',
          paddingLeft: '20px'
        }}
        className='flex flex-column'
      >
        {sidebar}
      </div>
    )
  }
}

export default RightDash
