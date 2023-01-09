import { Component } from 'react'
import { Card, Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import WriterModal from '../post/WriterModal'
import BrowserStore from '../../utils/BrowserStore'

import '../../styles/post/writer.css'

var cur = null;
export default class Writer extends Component {

	state = {
		showWriterModal: false,
		writerModalContent: null,
		editorMode: null,
		editorContent: {},
		images:[],
		organisation: null,
		buttons: [
			{
				color: 'lightgreen',
				tip: 'Write an article',
				icon: icons.faPen,
				onClick: () => this.openWriterModal(this.state.editorContent, 'article')
			},
			{
				color: 'pink',
				tip: 'Create an event',
				icon: icons.faCalendar
			},
			{
				color: 'lightblue',
				tip: 'Add a job',
				icon: icons.faBriefcase,
				onClick: () => this.openWriterModal(this.state.editorContent, 'job')

			},
			{
				color: 'lightgray',
				tip: 'Post a video',
				icon: icons.faVideo
			},
			{
				color: 'yellow',
				tip: 'Post images',
				icon: icons.faImage,
				onClick: () => this.openWriterModal(this.state.editorContent, 'image')
			}
		]
	}

	addImage = img => this.setState({ images: [...this.state.images, img ] })

  deleteImage = img => {
    const idx = this.state.images.findIndex(i => i.id === img)
    let images = this.state.images
    images.splice(idx, 1)
    this.setState({ images })
  }
	handleOrganisationChange = organisation => this.setState({ organisation })
	
	renderTooltip = props => {
		return <Tooltip {...props}>
			{props.message || ''}
		</Tooltip>
	}

	onEditorContentChange = (editorContent) => {
		console.log(editorContent)
		this.setState({ editorContent })
	}

	onCancel = () => {
		this.setState({ showWriterModal: false, editorContent: {}, editorMode: null })
	}

	openWriterModal = (content, mode) => {
		console.log(mode);
		cur = mode
		this.setState({ showWriterModal: true, editorContent: content, editorMode: mode })
		debugger
		console.log(this.state)
	}

	onSubmit = (value) => {
		const user = JSON.parse(localStorage.getItem('user-info'));
		if(cur==='job')
		{
			value = value.editorContent;
			console.log(value);
			const user = BrowserStore.get('user-info', true);
			// TODO: Create or edit the entity here based on editor mode
			axios.post(process.env.REACT_APP_API_URL + '/api/v1/storeJobs', { 
				user_id: user.id,
				company:value["company"],
				category:value["category"],
				profile:value["profile"]
				}, 
				{
				headers: {
				Authorization: `Bearer ${BrowserStore.get('userToken')}`
				}
			}).then((res) => {
				console.log(res.data);
				console.log(cur);
			})
				.catch((err) => {
				console.log(err)
				})
		}
		else if(cur==='article')
		{
			var title = value.editorContent.title;
			var body = value.editorContent.content[0].children[0].text;
			var images = value.images;
			axios.post(process.env.REACT_APP_API_URL + '/api/v1/feed', { 
				feed_heading:title,
				username:user.name,
				image_path:"Empty",
				user_id:user.id,
				content:body,
				images:images
				}, 
				{
				headers: {
				Authorization: `Bearer ${BrowserStore.get('userToken')}`
				}
			}).then((res) => {
				this.setState({images:[]})
				console.log(res.data);
				console.log(cur);
			})
				.catch((err) => {
				console.log(err)
				})
			
		}
		this.onCancel()
	}

	render() {
		return (
			<div>
			<WriterModal 
				images={this.state.images}
				addImage={this.addImage}
				deleteImage={this.deleteImage}
				possibleSuggestions = {this.props.possibleSuggestions}
				onHide={this.onCancel} 
				onSubmit={this.onSubmit} 
				body={this.state.writerModalContent} 
				show={this.state.showWriterModal} 
				editorMode={this.state.editorMode} 
				handleEditorContentChange={this.onEditorContentChange} 
				editorContent={this.state.editorContent}
				handleOrganisationChange={this.handleOrganisationChange}
				organisation={this.state.organisation}/>

			<div className="post mx-auto shadow">
				<Card className="post-card">
					<div className="d-flex flex-column">
						<div className="d-flex flex-row align-items-center">
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
					    				marginRight: '20px'
					    			}}
					    		/>
							</div>
							<div className="d-flex align-items-center" style={{
								overflowX: 'auto'
							}}>
								{this.state.buttons.map((b, idx) => <div key={idx}>
									<OverlayTrigger
								    placement="bottom"
								    delay={{ show: 100, hide: 400 }}
								    overlay={props => this.renderTooltip({ message: b.tip, ...props})}
								  >
										<Button 
						    			style={{
						    				border: '3px solid ' + b.color,
						    				marginRight: '10px',
						    				background: b.color
						    			}}
						    			variant={'outline'}
						    			className="writer-button"
						    			onClick={b.onClick || (() => {})}
						    		>
						    			<FontAwesomeIcon  icon={b.icon} />
						    		</Button>
						    	</OverlayTrigger>
								</div>)}
							</div>
						</div>
					</div>
				</Card>
			</div>
			</div>
		);
	}
}
