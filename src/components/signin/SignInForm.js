import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spinner } from 'react-bootstrap'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'

import { parseQuery } from '../../utils/url'

import '../../styles/signinup/SignInUp.css'

import ismconnectlogo from '../../assets/images/logos/logo.png'
import linkedinsignin from '../../assets/images/utils/Sign-In-Small---Default.png'

const SignInForm = ({ values, setValues, nextStep, emailIsValid, phoneIsValid, loading, handleSignIn }) => {
  const continueForm = (e) => {
    // e.preventDefault();
    nextStep()
  }

  const [showPassText, setShowPassText] = useState(false)

  return (
    <div className='ha-form-cover'>
      <Fade right>
        <form className='ha-sign-in-up-form' action='' onSubmit={handleSignIn}>
          <img src={ismconnectlogo} alt='ismconnectlogo' />
          <h1>Sign In</h1>
          <input
            autoComplete='username'
            type='email'
            value={values.sInId}
            onChange={(e) => setValues.setSInId(e.target.value)}
            className='ha-text'
            placeholder='Email Address or Phone Number'
            style={{ border: (emailIsValid || phoneIsValid ? '' : '1px solid red') }}
          />

          <span><input autoComplete='current-password' type={showPassText ? 'text' : 'password'} value={values.setSInPass} onChange={(e) => setValues.setSInPass(e.target.value)} className='ha-text' placeholder='Password' />
            <FontAwesomeIcon onClick={() => { setShowPassText(!showPassText); console.log(showPassText) }} className='ha-show-pass-icon' icon={showPassText ? icons.faEye : icons.faEyeSlash} />
          </span>

          <span>
            <input type='checkbox' className='ha-checkbox' />
            <label> Remember Me </label>
          </span>
          <p>
            <button
              className='ha-sign-form-btn'
              type='submit'
              disabled={!emailIsValid || loading}
            >
              {loading ? <Spinner animation='grow' /> : 'Log In'}
            </button>
            <span><a href='/forgotpassword'>Forgot Password?</a></span>
          </p>
          <div className='ha-cover-or'> <h3>Or</h3> </div>
          <div className='ha-cover-other-signin'>
            <a href={process.env.REACT_APP_API_URL + '/api/v1/auth/linkedin?redirect_to=' +
            (parseQuery(window.location.href).redirect_to ?? '')}
            >
              <img src={linkedinsignin} alt='Sign in with LinkedIn' />
            </a>
          </div>
        </form>
        <div className='ha-cover-new-user'><h2>New User? Connect with ISMites <span onClick={(e) => continueForm(e)}> Sign Up </span></h2></div>
      </Fade>
    </div>
  )
}

export default SignInForm
