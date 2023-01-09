import React, { Component } from 'react'
import { connect } from 'react-redux'

import FixedTopbar from '../components/home/FixedTopbar'
import OffCanvasSidebar from '../components/home/OffCanvasSidebar'
import Banner from '../components/home/Banner'
import JoinNetworkCard from '../components/home/JoinNetworkCard'
import ISMDirectoryCard from '../components/home/ISMDirectoryCard'
import ParallaxQuote from '../components/home/ParallaxQuote'
import Blogs from '../components/home/Blogs'
import Contribute from '../components/home/Contribute'
import Footer from '../components/home/Footer'

import '../styles/landing/core.css'

const mql = window.matchMedia(`(min-width: 800px)`)

class Landing extends Component {

	state = { bigScreen: mql.matches, topbarBg: 'transparent', isSidebarOpen: false }

	handleQueryChange = () => {
		this.setState({ bigScreen: mql.matches })
	}

	handleScroll = (theme, height) => {
		this.setState({ topbarBg: theme, topbarHeight: height })
	}

	handleSidebarToggle = (state) => {
		this.setState({ isSidebarOpen: state === undefined ? !this.state.isSidebarOpen : state })
	}

	componentDidMount() {
		document.title = 'Welcome | ISM Connect'
		mql.addListener(this.handleQueryChange)
	}

	componentWillUnmount() {
		mql.removeListener(this.handleQueryChange)
	}

	render() {
		return (
			<>
				<FixedTopbar 
					variant="dark" 
					bg={this.state.topbarBg} 
					bigScreen={this.state.bigScreen} 
					handleScroll={this.handleScroll} 
					handleSidebarToggle={this.handleSidebarToggle}
					height={this.state.topbarHeight} />
				
				<div className="landing-main-content align-items-center">
					<OffCanvasSidebar 
						isOpen={this.state.isSidebarOpen} 
						bigScreen={this.state.bigScreen}
						handleSidebarToggle={this.handleSidebarToggle} />
					<Banner bigScreen={this.state.bigScreen} />
					<JoinNetworkCard bigScreen={this.state.bigScreen} />
					<ISMDirectoryCard bigScreen={this.state.bigScreen} />
					<ParallaxQuote bigscreen={this.state.bigScreen} />
					<Blogs bigscreen={this.state.bigScreen} />
					<Contribute bigscreen={this.state.bigScreen} />
					<Footer bigscreen={this.state.bigScreen} />
				</div>
			</>
		)
	}
}

const mapPropsToState = state => ({
  bigScreen: state.app.bigScreen
})

export default connect(mapPropsToState, null)(Landing)
