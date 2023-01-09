import { appActionTypes } from '../types'

const initialState = { bigScreen: window.matchMedia('(min-width: 800px)').matches }

export default function app (state = initialState, action) {
  switch (action.type) {
    case appActionTypes.SET_BIG_SCREEN:
      return {
        ...state,
        bigScreen: action.payload
      }
    default:
      return state
  }
}
