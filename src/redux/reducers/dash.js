import { dashActionTypes } from '../types'

const initialState = { leftDashOpen: true }

export default function dash (state = initialState, action) {
  switch (action.type) {
    case dashActionTypes.SET_LEFT_DASH_OPEN:
      return {
        ...state,
        leftDashOpen: action.payload
      }
    default:
      return state
  }
}
