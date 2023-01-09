import { Spinner } from 'react-bootstrap'

import ismconnectlogo from '../../assets/images/logos/logo.png'
import '../../styles/signinup/SignInUp.css'

const SignUpDetails = ({ values, setValues, nextStep, prevStep, allowNext, emailIsValid, phoneIsValid, loading }) => {
  const continueForm = (e) => {
    e.preventDefault()
    nextStep()
  }

  const backForm = (e) => {
    // e.preventDefault();
    prevStep()
  }

  return (
    <div>
      <div className='ha-form-cover'>
        <form className='ha-sign-in-up-form' action=''>
          <img src={ismconnectlogo} alt='ISM Connect Logo' />
          <h1>Sign Up</h1>
          <input type='text' value={values.sUpFullName} onChange={(e) => setValues.setSUpFullName(e.target.value)} className='ha-text' placeholder='Full Name' />

          <input
            type='email'
            value={values.sUpMail}
            onChange={(e) => setValues.setSUpMail(e.target.value)}
            className='ha-text'
            placeholder='Email'
            style={{ border: (emailIsValid ? '' : '1px solid red') }}
          />

          <input
            type='phone'
            value={values.sUpPhone}
            onChange={(e) => setValues.setSUpPhone(e.target.value)}
            className='ha-text'
            placeholder='Phone Number'
            style={{ border: (phoneIsValid ? '' : '1px solid red') }}
          />

          <input type='text' value={values.sUpYear} onChange={(e) => setValues.setSUpYear(e.target.value)} className='ha-text' placeholder='ISM Batch of Year (Optional)' />

          <button
            className='ha-sign-form-btn'
            onClick={(e) => continueForm(e)}
            disabled={!allowNext || loading}
          >
            {loading ? <Spinner animation='grow' /> : 'Next'}
          </button>
          {/* <span> <input type="checkbox" className="checkbox" /> <label>Remember Me </label> </span>
        <p> <button>Login</button> <span>Forgot Password?</span></p>
        <div className="cover-or"> <h3>Or</h3> </div>
        <div className="cover-other-signin"><a href="#"><img src={linkedinsignin} /></a>
        </div> */}
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

export default SignUpDetails
