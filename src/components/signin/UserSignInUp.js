import { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import validator from 'validator'

import { registerUser, loginUser } from '../../redux/actions/auth'
import SignInForm from './SignInForm'
import SignUpDetails from './SignUpDetails'
import SignUpPass from './SignUpPass'

const UserSignInUp = (props) => {
  const [sUpPass, setSUpPass] = useState('')
  const [sUpPassRem, setSUpPassRem] = useState('')
  const [sUpFullName, setSUpFullName] = useState('')
  const [sUpMail, setSUpMail] = useState('')
  const [sUpPhone, setSUpPhone] = useState('')
  const [sUpYear, setSUpYear] = useState('')
  const [sInId, setSInId] = useState('')
  const [sInPass, setSInPass] = useState('')
  const [step, setStep] = useState(props.step || 1)
  const [showPass, setShowPass] = useState(false)
  const [confirmHasBeenTouched, setConfirmHasBeenTouched] = useState(false)
  const [loading, setLoading] = useState(false)

  const nextStep = () => {
    const savedstep = step
    setStep(savedstep + 1)
  }

  const prevStep = () => {
    // eslint-disable-next-line no-unused-vars
    const savedstep = step
    setStep(1)
  }

  const values = { sInId, sInPass, sUpFullName, sUpPhone, sUpYear, sUpMail, sUpPass, sUpPassRem }
  const setValues = { setSInId, setSInPass, setSUpFullName, setSUpPhone, setSUpYear, setSUpMail, setSUpPass, setSUpPassRem }

  function resetSignInForm () {
    setStep(1)
    setShowPass(false)

    setSInId('')
    setSInPass('')
  }

  function resetSignUpForm () {
    setStep(2)
    setShowPass(false)

    setSUpPass('')
    setConfirmHasBeenTouched(false)
    setSUpPassRem('')
    setSUpMail('')
    setSUpYear('')
    setSUpPhone('')
  }

  function resetAllForms () {
    resetSignUpForm()
    resetSignInForm()
  }

  function signUpDetailsAreValid () {
    return (!!sUpMail && !!sUpFullName && validator.isEmail(sUpMail))
  }

  function isEmailValid (mail) {
    return (!mail || validator.isEmail(mail))
  }

  function isPhoneValid (phone) {
    return (!phone || validator.isMobilePhone(phone))
  }

  function passwordsAreMatchingOrEmpty () {
    return (typeof sUpPass === 'string' &&
      typeof sUpPassRem === 'string' &&
      sUpPass === sUpPassRem)
  }

  function passwordsAreMatching () {
    return (!!sUpPass &&
      !!sUpPassRem &&
      typeof sUpPass === 'string' &&
      typeof sUpPassRem === 'string' &&
      sUpPass === sUpPassRem)
  }

  const callback = (data) => {
    setTimeout(() => {
      if ((data?.response?.state >= 400) || data instanceof Error) {
        setStep(2)
      } else resetAllForms()
      setLoading(false)
    }, 2000)
  }

  const handleRegister = (ev) => {
    function cb () {
      const data = {
        name: sUpFullName,
        email: sUpMail,
        password: sUpPass,
        password_confirmation: sUpPassRem,
        phone: sUpPhone
      }
      const url = new URL(window.location.href)
      const params = {}
      for (const p of url.searchParams.entries()) { params[p[0]] = p[1] }
      props.registerUser(data, params, callback)
    }
    ev.preventDefault()
    setLoading(true)
    cb()
  }

  const handleSignIn = (ev) => {
    function cb () {
      const data = {
        email: sInId,
        password: sInPass
      }
      const url = new URL(window.location.href)
      const params = {}
      for (const p of url.searchParams.entries()) { params[p[0]] = p[1] }
      props.loginUser(data, params, callback)
    }
    ev.preventDefault()
    setLoading(true)
    cb()
  }

  switch (step) {
    case 1:
      return (
        <div>
          <SignInForm
            values={values}
            setValues={setValues}
            nextStep={nextStep}
            showPass={showPass}
            setShowPass={setShowPass}
            emailIsValid={isEmailValid(sInId) || isPhoneValid(sInId)}
            loading={loading}
            handleSignIn={handleSignIn}
          />
          {props.currentUserId}
        </div>
      )
    case 2:
      return (
        <div>
          <SignUpDetails
            values={values}
            setValues={setValues}
            nextStep={nextStep}
            prevStep={prevStep}
            allowNext={signUpDetailsAreValid()}
            emailIsValid={isEmailValid(sUpMail)}
            phoneIsValid={isPhoneValid(sUpPhone)}
            loading={loading}
          />
        </div>
      )
    default:
      return (
        <div>
          <SignUpPass
            values={values}
            setValues={setValues}
            // showPass={showPass}
            // setShowPass={setShowPass}
            nextStep={nextStep}
            prevStep={prevStep}
            allowRegister={passwordsAreMatching()}
            passwordsAreMatchingOrEmpty={passwordsAreMatchingOrEmpty()}
            confirmHasBeenTouched={confirmHasBeenTouched}
            setConfirmHasBeenTouched={setConfirmHasBeenTouched}
            handleRegister={handleRegister}
            loading={loading}
          />
        </div>
      )
  }
}

UserSignInUp.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, { registerUser, loginUser })(UserSignInUp)
