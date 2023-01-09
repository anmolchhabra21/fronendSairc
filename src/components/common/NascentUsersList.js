import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Image } from 'react-bootstrap'

import ConnectButton from '../feed/ConnectButton'

export default class NascentUsersList extends Component {
	render() {
		const { users:items } = this.props
		return (
			<div>
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
			</div>
		)
	}
}
