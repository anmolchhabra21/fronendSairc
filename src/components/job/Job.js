import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import WriterModal from '../post/WriterModal'

import '../../styles/job/job.css'

export default class Job extends Component {
  state = {
    showWriterModal: false,
    editorContent: {
      company: this.props.company,
      profile: this.props.profile,
      category: this.props.category
    },
  }

  handleClick = ev => {
    this.setState({ 
      showWriterModal: true, 
      editorContent: this.state.editorContent, 
      editorMode: null 
    })
  }

  handleEditorCancel = ev => {
    this.setState({ showWriterModal: false, editorContent: {}, editorMode: null })
  }

  handleEditorSubmit = ev => {
    // Save and change state
  }

  handleEditorContentChange = editorContent => {
    this.setState({ editorContent })
  }

  render () {
    return (
      <div className='post mx-auto shadow mb-4 mt-5'>
        {this.state.showWriterModal ? <WriterModal 
          possibleSuggestions = {this.props.possibleSuggestions}
          onHide={this.handleEditorCancel} 
          onSubmit={this.handleEditorSubmit} 
          body={this.state.writerModalContent} 
          show={this.state.showWriterModal} 
          editorMode={'job'} 
          handleEditorContentChange={this.handleEditorContentChange} 
          editorContent={this.state.editorContent} /> : null}
        <div className='card post-card'>
          <div className='d-flex flex-column'>
            <div className='d-flex flex-row align-items-center justify-content-around px-1 pb-2'>
                <div className='job-card-inner'>
                  {this.props.company}
                </div>
                <div className='job-card-inner'>
                  {this.props.category}
                </div>
                <div className='job-card-inner fw-bold'>
                  <Link to={this.props.url || '/jobs'}> 
                    {this.props.profile}
                  </Link>
                </div>
              
              <div style={{ cursor: 'pointer' }} onClick={this.handleClick}>
                <FontAwesomeIcon icon={faPen} />                  
              </div>
            </div>
            
              
            {/*<div className='d-flex flex-row align-items-center justify-content-around px-2 pb-3'>
              <div className='job-card-inner'>
                Register here
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    )
  }
}
