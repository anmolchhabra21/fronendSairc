import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import PostEditor from './PostEditor'
import ImageUploader from './ImageUploader'
import JobEditor from './JobEditor'
import AboutEditor from '../organisation/AboutEditor'

export default class WriterModal extends Component {
  state = {
    images: []
  }

  addImage = img => this.setState({ images: [...this.state.images, img ] })

  deleteImage = img => {
    const idx = this.state.images.findIndex(i => i.id === img)
    let images = this.state.images
    images.splice(idx, 1)
    this.setState({ images })
  }

  render () {
    const { editorMode, editorContent, handleEditorContentChange } = this.props
    let body = null

    switch (editorMode) {
      case 'article':
        body = (
          <PostEditor
            value={editorContent}
            handleValueChange={handleEditorContentChange}
            images={this.props.images || this.state.images}
            addImage={this.props.addImage || this.addImage}
            deleteImage={this.props.deleteImage || this.deleteImage}
            organisation={this.props.organisation}
            handleOrganisationChange={this.props.handleOrganisationChange}
          />
        )
        break
      case 'image':
        body = (
          <div className='post-editor-container'>
            <ImageUploader />
          </div>
        )
        break
      case 'job':
        body = (
          <JobEditor
          possibleSuggestions = {this.props.possibleSuggestions}
            value={editorContent}
            handleValueChange={handleEditorContentChange}
          />
        )
        break
      case 'organisationAbout':
        body = (
          <AboutEditor value={editorContent}
            handleValueChange={handleEditorContentChange}
          />
        )
        break
      default:
        body = null
    }

		return (
			<Modal
				show={this.props.show}
				size="lg"
	    	aria-labelledby="contained-modal-title-vcenter"
	    	className="writer-modal"
	    	centered>
	      <Modal.Body>
	      	{body}
	      </Modal.Body>
	      <Modal.Footer>
	        <Button size="lg" variant="outline-danger" onClick={this.props.onHide}>
	        	Cancel
        	</Button>
	        <Button size="lg" variant="info" onClick={(ev)=>{this.props.onSubmit({editorContent:editorContent,images:this.props.images})}}>
	        	{this.props.submitButtonText || 'Submit'}
	        </Button>
	      </Modal.Footer>
	    </Modal>
		)
	}
}
