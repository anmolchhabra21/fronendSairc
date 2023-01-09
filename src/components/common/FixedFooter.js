/**
 * copied from [jacoballenwood's answer on StackOverflow](https://stackoverflow.com/a/40568544)
 */

import React, { Component } from 'react';

export default class FixedFooter extends Component {
	state = {
		main: {
	    backgroundColor: "#F8F8F8",
	    borderTop: "1px solid #E7E7E7",
	    textAlign: "center",
	    position: "fixed",
	    left: "0",
	    bottom: "0",
	    height: "100px",
	    width: "100%",
	  },
	  phantom: {
	    display: 'block',
	    padding: '0px',
	    width: '100%',
	  }
	}

	render() {

		let mainStyle = { ...this.state.main, ...(this.props.mainStyle || {}) }
		let phantomStyle = { ...this.state.phantom, ...(this.props.phantomStyle || {}) }

		return (
			<div>
	      <div style={phantomStyle} />
	      <div style={mainStyle}>
	          { this.props.footerContent || 'Hello!' }
	      </div>
	    </div>  		
      );
	}
}
