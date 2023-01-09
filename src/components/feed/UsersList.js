import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import ConnectButton from './ConnectButton'

class UsersList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
		}
	}

	render() {
		const items = this.props.users || []
		return (
			<>
				<Card className="text-left rounded mb-3 bg-transparent border-0">
					<Card.Header
						as="div"
						className="text-blue bg-transparent border-0"
						style={{
							textAlign: 'left',
							padding: '0',
							paddingLeft: '10px',
						}}
					>
						<h5
							style={{
								borderBottom: '2px solid lightgrey',
								width: 'fit-content',
								padding: '2px',
							}}
						>
							LET'S CONNECT
						</h5>
					</Card.Header>
					<Card.Body
						style={{
							paddingTop: '0',
							paddingBottom: '0',
						}}
					>
						<ListGroup variant="flush">
							{(items || []).map((i, idx) => {
								return (
									<ListGroup.Item
										key={idx}
										style={{
											paddingLeft: '0',
										}}
									>
										<Link
											to="#"
											className="d-flex align-items-start bg-transparent"
											style={{ textDecoration: 'none' }}
										>
											<div
												className="d-flex flex-row align-items-center"
												style={{ width: '100%', justifyContent: 'start' }}
											>
												<div sm={3} className="d-flex align-items-center">
													<Image
														src={i.image}
														roundedCircle
														width="50px"
														height="50px"
														style={{
															border: '3px solid #c14b47',
															boxSizing: 'border-box',
															objectFit: 'cover',
														}}
													/>
												</div>
												<div
													className="d-flex flex-column justify-content-center"
													style={{
														textAlign: 'left',
														marginLeft: '10px',
													}}
												>
													<div
														className="fw-bold"
														style={{
															fontSize: '14px',
														}}
													>
														{i.name}
													</div>
													<div
														className="text-muted"
														style={{
															fontSize: '13px',
														}}
													>
														{i.heading}
													</div>
												</div>
												<div
													style={{ marginLeft: 'auto' }}
													className="d-flex text-center align-items-center"
												>
													<ConnectButton size="md" />
												</div>
											</div>
										</Link>
									</ListGroup.Item>
								)
							})}
						</ListGroup>
					</Card.Body>																																																																																																																																																				
				</Card>
			</>
		)
	}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
}

export default UsersList
