import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import '../styles/signinup/SigninupIndex.css'
// import SignInForm from './components/SignInForm';
import ForgotPassword from '../components/signin/forgotPassword'
import ismlogo from '../assets/images/campus/ismlogo.png'
import campus1 from '../assets/images/campus/campus1.jpg'
import campus2 from '../assets/images/campus/campus2.jpg'
import campus3 from '../assets/images/campus/campus3.jpg'
import campus4 from '../assets/images/campus/campus4.jpg'

const Enter = () => {
  useEffect(() => {
    const func = () => {
      document.title = 'Enter | ISM Connect'
    }
    func()
  }, [])

  return (
    <div>

      <ForgotPassword />

    </div>

  )
}

export default Enter
