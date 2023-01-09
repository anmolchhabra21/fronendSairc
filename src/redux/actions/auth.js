import axios from 'axios'
// import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

import { userActionTypes } from '../types'
import { storeAuthToken, removeAuthToken } from '../../utils/auth'
import setAuthToken from '../../utils/setAuthToken'
import toasterProps from '../../utils/toasterProps'
import BrowserStore from '../../utils/BrowserStore'

// Set logged in user
export const setCurrentUser = (data) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: data
  }
}

export const setCurrentUserType = (data) => {
  return {
    type: userActionTypes.SET_CURRENT_USER_TYPE,
    payload: data
  }
}

export const setCurrentUserToken = (data) => {
  return {
    type: userActionTypes.SET_CURRENT_USER_TOKEN,
    payload: data
  }
}

export const handleLogin = (res, dispatch, callback, params) => {
  const { token, user, info } = res.data
  BrowserStore.add('user-info', JSON.stringify(user))

  storeAuthToken(token)

  // Set token to Auth header
  setAuthToken(token)

  // Set user in LocalStorage
  dispatch(setCurrentUser({
    ...user, ...info
  }))
  dispatch(setCurrentUserToken(token))

  // Custom callback
  callback(res)

  // Notify and redirect to feed
  setTimeout(() => {
    toast
      .success('Logged In Successfully! 😄 Redirecting ...', toasterProps())
    setTimeout(
      () => (window.location.pathname = params.redirect_to ?? '/feed'), 1000)
  }, 100)
}

export const loginWithProvider =
  (data, params = {}, cb = () => {}, headers = {}) => dispatch => {
    handleLogin(data, dispatch, cb, params)
  }

export const registerUser =
  (userData, params = {}, callback = () => {}, headers = {}) => (dispatch) => {
    axios
      .post(process.env.REACT_APP_API_URL + '/api/v1/auth/register', userData, {
        params,
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        callback(res)
        handleLogin(res, dispatch, callback, params)
      })
      .catch((err) => {
        if (err.response && err.response.status === 419) {
          toast.error(
            'There was token mismatch, attempting to reload... 🤥', toasterProps())
          setTimeout(
            () => window.location.reload(),
            3000
          )
        } else {
          callback(err)
          setTimeout(
            () => { toast.error(err.response.data.message + ' 🤥', toasterProps()); console.log(err) },
            
            300
          )
        }
      })
  }

// Login - get user token
export const loginUser =
  (userData, params = {}, callback = () => {}, headers = {}) => (dispatch) => {
    axios
      .post(process.env.REACT_APP_API_URL + '/api/v1/auth/signin', userData, { params, headers })
      .then(res => handleLogin(res, dispatch, callback, params))
      .catch((err) => {
        toast.error(err.response.data.message + ' 🙁', toasterProps({ autoClose: 3000 }))
        callback()
      })
  }

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  removeAuthToken()
  BrowserStore.remove('user-info')
  // Remove auth header for future requests
  setAuthToken(false)
  // // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser(null))
  dispatch(setCurrentUserToken(null))

  // TODO: Call /auth/signout to logout of everywhere

  // Notify and redirect to feed
  setTimeout(() => {
    toast
      .success('Logged Out Successfully. Bye, bye! 😄', toasterProps())
    setTimeout(
      () => (window.location.pathname = '/'), 1000)
  }, 100)
}
