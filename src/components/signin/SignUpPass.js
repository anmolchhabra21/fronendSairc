import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

import '../../styles/signinup/SignInUp.css'

import ismconnectlogo from '../../assets/images/logos/logo.png'

const SignUpPass = ({ passwordsAreMatchingOrEmpty, confirmHasBeenTouched, setConfirmHasBeenTouched, values, setValues, nextStep, prevStep, showPass, setShowPass, handleRegister, allowRegister, loading }) => {
  // eslint-disable-next-line no-unused-vars
  const continueForm = (e) => {
    e.preventDefault()
    nextStep()
  }

  const backForm = (e) => {
    // e.preventDefault();
    prevStep()
  }

  // const [showPassText, setShowPassText] = useState(false);
  const [showPassTextRem, setShowPassTextRem] = useState(false)

  return (
    <div>
      <div className='ha-form-cover'>
        <form action='' className='ha-sign-in-up-form'>
          <img src={ismconnectlogo} alt='ismconnectlogo' />
          <h1>Sign Up</h1>
          <span>
            <input
              type='password'
              value={values.sUpPass}
              onChange={(e) => setValues.setSUpPass(e.target.value)}
              className='ha-text'
              placeholder='Password'
              autoComplete='new-password'
              style={{ border: (confirmHasBeenTouched && !passwordsAreMatchingOrEmpty ? '1px solid red' : '') }}
            />
          </span>

          <span>
            <input
              type={showPassTextRem ? 'text' : 'password'}
              value={values.sUpPassRem}
              onChange={(e) => setValues.setSUpPassRem(e.target.value)}
              className='ha-text'
              placeholder='Confirm Password'
              autoComplete='new-password'
              onFocus={() => setConfirmHasBeenTouched(true)}
              style={{ border: (confirmHasBeenTouched && !passwordsAreMatchingOrEmpty ? '1px solid red' : '') }}
            />
            <FontAwesomeIcon
              onClick={() => { setShowPassTextRem(!showPassTextRem) }}
              className='ha-show-pass-icon'
              icon={showPassTextRem ? icons.faEye : icons.faEyeSlash}
            />
          </span>

          {/* <span className="ha-agree-container">
            <input type="checkbox" className="ha-checkbox ha-agree-checkbox" />
            <p className="ha-agree-check-text"><b>I agree that:</b><br/> I have read and accepted the
              <a className="ha-link" href="/terms" target="_blank">Terms of Use.</a> <br/>See our
              <a className="ha-link" href="/privacy" target="_blank">Privacy Policy</a> for more details and opt-out of our service at any time.</p>
          </span> */}

          <button
            className='ha-sign-form-btn'
            onClick={handleRegister}
            disabled={(!allowRegister) || loading}
          >
            {loading ? <Spinner animation='grow' /> : 'Create Account'}
          </button>

        </form>
        <div className='ha-cover-new-user'>
          <h2>Already Have an Account?
            <span onClick={(e) => backForm(e)}> Sign In </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SignUpPass
