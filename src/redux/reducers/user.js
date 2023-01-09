import { userActionTypes } from '../types'

const initialState = { userId: null, type: null, user: null }

export default function user (state = initialState, action) {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      }
    case userActionTypes.SET_CURRENT_USER_ID:
      return {
        ...state,
        userId: action.payload
      }
    case userActionTypes.SET_CURRENT_USER_TYPE:
      return {
        ...state,
        type: action.payload
      }
    default:
      return state
  }
}
