import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import UserSignInUp from '../components/signin/UserSignInUp'

import { parseQuery } from '../utils/url'
import { loginWithProvider } from '../redux/actions/auth'

import '../styles/signinup/SigninupIndex.css'

import ismlogo from '../assets/images/campus/ismlogo.png'
import campus1 from '../assets/images/campus/campus1.jpg'
import campus2 from '../assets/images/campus/campus2.jpg'
import campus3 from '../assets/images/campus/campus3.jpg'
import campus4 from '../assets/images/campus/campus4.jpg'
import { isLoggedIn } from '../utils/auth'

const Enter = props => {
	const history = useHistory()

	useEffect(() => {
		const func = () => {
			document.title = 'Enter | ISM Connect'

			if (isLoggedIn()) history.push('/feed')

			const query = parseQuery(window.location.href)
			if (query.token) {
				const encodedString = query.token
				const decodedString = atob(encodedString)
				props.loginWithProvider({ data: JSON.parse(decodedString) }, query)
			}
		}
		func()
	}, [props, history])

	const imagesCol = [
		campus1, campus2, campus3, campus4
	]

	let step = 1
	const url = new URL(window.location.href)
	for (const p of url.searchParams.entries()) {
		if (p[0] === 'step') {
			step = parseInt(p[1])
			if (!!step && step >= 2) {
				step = 2
			} else step = 1
		}
	}

	const randBgImg = Math.floor(Math.random() * 4)
	const addr = `url(${imagesCol[randBgImg]})`
	return (
		<div className='ha-body' style={{ backgroundImage: addr }}>
			<div className='ha-bg-cover-blue' />
			<UserSignInUp step={step || 1} />

			<Fade bottom>
				<div className='ha-ism-logo'>
					<img src={ismlogo} alt='Logo of IIT (ISM) Dhanbad' />
				</div>
			</Fade>
		</div>
	)
}

Enter.propTypes = {
	loginWithProvider: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps, { loginWithProvider })(Enter)
