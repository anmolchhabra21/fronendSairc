import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

import '../../styles/landing/banner.css'

import bg1 from '../../assets/videos/loop-bg-1.mp4'
import logoBg from '../../assets/images/campus/ism-bg.png'
import logo from '../../assets/images/logos/logo.png'

export default class Banner extends Component {
	state = {
		videoPlaying: true
	}

	handleVideoStateChange = () => {
		const video = document.getElementById('banner-video')
		if (video.paused) {
	    video.play()
	    this.setState({ videoPlaying: true })
	  } else {
	    video.pause()
	    this.setState({ videoPlaying: false })
	  }
	}

	render() {
		return (
			<div className="landing-banner-container">
			<div className="landing-banner-image-overlay-container">
			  {/*<Image src={bg} alt="Avatar" className="landing-banner-image" />*/}
			  <video autoPlay="autoplay" muted loop className="landing-banner-image" id="banner-video">
				  {/*<source src={bg2} type="video/mp4" />*/}
					<source src={bg1} type="video/mp4" />
					{/*<source src={bg3} type="video/mp4" />*/}
				</video>
			  <div className="landing-banner-image-overlay">
			    <div className="landing-banner-image-overlay-text d-flex flex-column">
			    	<div className="landing-banner-image-overlay-text-heading">
			    			TOGETHER, THE LEGACY LIVES ON
			    	</div>
			    	<div className="landing-banner-image-overlay-text-subheading">
			    		<Image src={logoBg} alt="ism" className="landing-banner-image-overlay-text-subheading-image" />
			    		<div className="landing-banner-image-overlay-text-subheading-overlay d-flex flex-column justify-content-center align-items-center">
				    		<div>
				    			<Image src={logo} alt="ism" className="landing-banner-image-overlay-text-subheading-overlay-image" />
				    		</div>
			    		</div>
			    	</div>
		    	</div>
		    	<div
		    		title="Play/Pause"
		    		className="landing-banner-image-overlay-text-subheading-overlay-controls d-flex flex-column justify-content-center align-items-start" onClick={this.handleVideoStateChange}>
		    		<div className="d-flex flex-column align-items-center justify-content-center landing-banner-image-overlay-text-subheading-overlay-controls-inner">
		    			<div style={{ color: 'white' }}>
		    				<FontAwesomeIcon icon={this.state.videoPlaying ? faPause : faPlay} />
		    			</div>
		    		</div>
	    		</div>
			  </div>
			</div>						
			</div>
		)
	}
}
