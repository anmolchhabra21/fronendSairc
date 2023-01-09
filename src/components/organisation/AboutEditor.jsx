import React, { Component } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.bubble.css'

export default class AboutEditor extends Component {
	constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'indent',
    'link', 'image'
  ]
 
  handleChange(value) {
    this.setState({ text: value })
  }
 
  render() {
  	const placeholder = this.props.placeholder 
    || 'Select text for additional formatting options'
    
    return (
      <ReactQuill value={this.props.value}
        onChange={this.props.handleValueChange} theme="bubble" 
        modules={this.modules}
        formats={this.formats} 
        placeholder={placeholder} style={{
          height: '200px'
        }}/>
    )
  }
}
