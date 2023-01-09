import { Component } from 'react'
import Sidebar from 'react-sidebar'

const mql = window.matchMedia('(min-width: 800px)')

class Dash extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  componentDidMount () {
    mql.addListener(this.mediaQueryChanged)
  }

  componentDidUnmount () {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged () {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  render () {
    const MainContent = this.props.mainContent || (<div />)
    const SidebarContent = this.props.sidebarContent || (<div />)

    return (
      <Sidebar
        sidebar={SidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        shadow
        pullRight={this.props.pullRight || false}
      >
        {MainContent}
      </Sidebar>
    )
  }
}

export default Dash
