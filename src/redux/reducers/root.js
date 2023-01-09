import { combineReducers } from 'redux'
import user from './user'
import dash from './dash'
import app from './app'

export default combineReducers({
  user, dash, app
})
