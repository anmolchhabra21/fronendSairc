import { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import PostsContainer from '../feed/PostsContainer'
import AboutOrganisation from './AboutOrganisation'
import ImageGalleryOrganisation from './ImageGalleryOrganisation'
import SuggestionsOrganisation from './SuggestionsOrganisation'
import NascentUsersList from '../common/NascentUsersList'

import { getUserSuggestions } from '../../data/userSuggestions'
import { getAboutOrganisation } from '../../data/aboutOrganisation'

import '../../styles/organisation/bodyOrganisation.css'

const content = {
	about: null, images: null, people: null
}

class BodyOrganisation extends Component {

  state = { key: 'about', about: null, content: '' }

  handleAboutChange = about => {
  	this.setState({ about })
  }

  handleAboutContentChange = aboutContent => {
  	this.setState({ content: aboutContent })
  }

  render() {
  	if (this.state.key === 'about')
  		content.about = <AboutOrganisation 
  			content={this.state.content} 
  			value={this.state.about} 
  			handleChange={this.handleAboutChange} 
  			handleAboutContentChange={this.handleAboutContentChange} />
   	if (this.state.key === 'images')
  		content.gallery = <ImageGalleryOrganisation organisationId={1} />
  	if (this.state.key === 'people')
  		content.people = <NascentUsersList users={getUserSuggestions(1)} />
  	if (this.state.key === 'posts')
  		content.posts = <PostsContainer fullWidth notTabbed noWriter posts={[
			  {
			    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
			    username: 'kaching',
			    userHeading: 'kach nach',
			    content: 'kacha nacha rqtq weqqiyyytt'
			  },
			  {
			    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
			    username: 'kaching',
			    userHeading: 'kach nach',
			    content: 'kacha nacha rqtq weqqiyyytt'
			  },
			]} />
		if (this.state.key === 'jobs')
  		content.jobs = <PostsContainer fullWidth notTabbed noWriter jobs={null} />

    const tabs = [
			{
				label: 'About',
				key: 'about',
				content: content.about
			},
			{
				label: 'Images',
				key: 'images',
				content: content.gallery
			},
			{
				label: 'People',
				key: 'people',
				content: content.people,
				containerRequired: true
			},
			{
				label: 'Posts',
				key: 'posts',
				content: content.posts
			},
			{
				label: 'Jobs',
				key: 'jobs',
				content: content.jobs
			},
			
		]
	  return (
	    <div className="body-organisation-container-tabs-outer d-flex p-4">
		    <div className="ha-body-main-tabs-container" style={{ minWidth: '70%' }}>
		    	<Tabs
			      id="body-organisation-container-tabs"
			      activeKey={this.state.key}
			      onSelect={(k) => this.setState({ key: k })}
			      defaultActiveKey={tabs[0].key}
			      className="mb-3">
			      {tabs.map((t, idx) => (<Tab 
				      	eventKey={t.key}
				      	title={t.label}
				      	tabClassName={"body-organisation-container-tab" + (this.state.key === t.key ? ' selected-body-organisation-container-tab' : ' nascent-body-organisation-container-tab')}
				      	variant="pills"
				      	key={idx} >
				      	{t.containerRequired ? <div style={{ borderRadius: '2rem', padding: '1rem', background: 'white',  border: '1px solid lightgrey' }}>
					      		{t.content}
					      	</div> : t.content}
				        
				      </Tab>))}
			    </Tabs>
		    </div>
				<div className="ha-body-cover-suggestions">
					<SuggestionsOrganisation />
				</div>
	    </div>
	  )
	}
}
  
export default BodyOrganisation
