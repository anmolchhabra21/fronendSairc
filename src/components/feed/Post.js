import { Component } from 'react'
import { Card, Image, Dropdown, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

import PostImageCarousel from './PostImageCarousel'
import ConnectButton from './ConnectButton'
import CommentsContainer from '../comments/CommentsContainer'
import WriterModal from '../post/WriterModal'

import BrowserStore from '../../utils/BrowserStore'

import '../../styles/post.css'

class Post extends Component {
	state = {
		showFirstLevelComments: false,
		showWriterModal: false,
		editorContent: this.props.content,
		images: [],
		organisation: null
	}

	handleOrganisationChange = organisation => this.setState({ organisation })

	addImage = img => this.setState({ images: [...this.state.images, img ] })

  deleteImage = img => {
    const idx = this.state.images.findIndex(i => i.id === img)
    let images = this.state.images
    images.splice(idx, 1)
    this.setState({ images })
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
		const user = BrowserStore.get('user-info', true)	
		const currentUser = true
		return (
			<div className="post mx-auto shadow mt-4 mb-5">
				{this.state.showWriterModal ? <WriterModal 
					possibleSuggestions = {this.props.possibleSuggestions}
					onHide={this.handleEditorCancel} 
					onSubmit={this.handleEditorSubmit} 
					body={this.state.writerModalContent} 
					show={this.state.showWriterModal} 
					editorMode={'article'} 
					handleEditorContentChange={this.handleEditorContentChange} 
					editorContent={this.state.editorContent} 
					images={this.state.images}
          addImage={this.addImage}
          deleteImage={this.deleteImage} /> : null}

				<Card className="post-card">
					<div className="d-flex flex-column">
						<div className="d-flex flex-row pb-3 align-items-center">
							<div className="d-flex align-items-center">
								<Image 
					    			src={this.props.image} 
					    			width="50px" 
					    			height="50px"
					    			roundedCircle 
					    			style={{
					    				border: '3px solid #c14b47',
					    				boxSizing: 'border-box',
					    				objectFit: 'cover',
					    				marginRight: '10px'
					    			}}
					    		/>
							</div>
							<div className="d-flex flex-column justify-content-start">
								<div className="fw-bold" style={{ marginLeft: '-7px' }}>
									{this.props.username}
								</div>
								<div className="small text-muted text-left">
									{this.props.userHeading}
								</div>
							</div>
							<div className="d-flex flex-row align-items-center" style={{ marginLeft: 'auto' }}>
								<div style={{ marginRight: '5px' }}>
									<ConnectButton 
										size={window.screen.availWidth <= 800 ? 'md' : 'lg'} 
										content={<FontAwesomeIcon icon={icons.faUserPlus} />} />
								</div>
							
								<Dropdown 
									id="collasible-nav-dropdown" 
									as={ButtonGroup}
									style={{ cursor: 'pointer' }}
									drop={'left'}>
		        			<Dropdown.Toggle 
					        	as="div" 
					        	variant="outline-success" 
					        	size="sm" 
					        	className="caret-off p-2">
								    <div className="d-flex flex-row">
					      			<div className="d-flex flex-column mr-1">
					      				<div style={{ fontSize: '20px' }}>
					      					<FontAwesomeIcon icon={icons.faEllipsisV} />
					      				</div>
					      			</div>
					      		</div>
						  		</Dropdown.Toggle>

								  <Dropdown.Menu>
								    {currentUser ? <Dropdown.Item 
								    	href="#edit" 
								    	onClick={this.handleClick}>
								    	Edit
							    	</Dropdown.Item> : null}
								  </Dropdown.Menu>
			   				</Dropdown>
							</div>
						</div>
						<div className="d-flex flex-row align-items-center justify-content-start px-2 pb-3">
							<div>
								{this.props.content}
							</div>
						</div>
						<div>
							<PostImageCarousel items={this.props.items}/>
						</div>
						<div className="comments-container-outer">
							<div 
								className="comments-container-toggle"
								style={{ borderBottom: this.state.showFirstLevelComments ? 
									'2px dashed grey': '' }}
								onClick={() => this.setState({ 
									showFirstLevelComments: !this.state.showFirstLevelComments })}
							>
								{!this.state.showFirstLevelComments ? 
								'Show Comments' : 'Hide Comments'}
							</div>
							
							{this.state.showFirstLevelComments && <CommentsContainer
				        commentsUrl="http://localhost:8000/api/v1/comments"
				        currentUserId={user["id"]}
						postid={this.props.postid}
				      />}
						</div>
					</div>
				</Card>
			</div>
		)
	}
}

export default Post
