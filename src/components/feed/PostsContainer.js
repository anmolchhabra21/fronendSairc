import { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import Post from './Post'
import Job from '../job/Job'
import Writer from './Writer'
import ComingSoonPost from './ComingSoonPost'

import '../../styles/postsContainer.css'

class PostsContainer extends Component {

	state = {
		key: 'connections'
	}

	render() {
		const posts = (this.props.posts || []).map((p, idx) => <Post 
			image={p.image_path} 
			username={p.username} 
			userHeading={p.userHeading} 
			content={p.content}
			files={p.files || []}
			key={idx}
			expanded={!!p.expanded}
			items={p.items}
			postid = {p.id||1}
		/>)

		const jobs = (this.props.jobs || ['', '', '']).map((j, idx) => <Job 
			company={j.company||"Company"} 
			category={j.category||"Category"} 
			profile={j.profile||"Profile"} 
			key={idx}/>
		)

		const tabs = [
			{
				name: 'connections',
				title: 'Connections',
				content: posts
			},
			{
				name: 'explore', 
				title: 'Explore', 
				content: <ComingSoonPost />
			},
			{
				name: 'jobs', 
				title: 'Jobs', 
				content: jobs
			}
		]

		let activeList = posts
		if (!activeList || !activeList.length)
			activeList = jobs

		return (
			<div className="d-flex flex-column posts-container" id="posts-container" style={{
				width: this.props.fullWidth ? '100%': undefined,
				padding: this.props.noPadding ? '0' : undefined
			}}>
				{this.props.noWriter ? null : <Writer possibleSuggestions = {this.props.possibleSuggestions} />}
				{this.props.noWriter ? null : <hr />}
				
				{this.props.notTabbed ? activeList : <Tabs
		      id="posts-container-tabs"
		      activeKey={this.state.key}
		      onSelect={(k) => this.setState({ key: k })}>
		      {tabs.map((t, tidx) => {
		      	return (
		      		<Tab 
		      			key={tidx}
				      	eventKey={t.name} 
				      	title={t.title} 
				      	tabClassName={"posts-container-tab" 
				      		+ (this.state.key === t.name ? 
				      			' selected-posts-container-tab' : ' nascent-posts-container-tab')}
				      	variant="pills">
				        {t.content}
				      </Tab>)
		      })}
		    </Tabs>}
			</div>
		)
	}
}

export default PostsContainer
