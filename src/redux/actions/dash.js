import { dashActionTypes } from '../types'

export const setLeftDashOpen = (data) => {
  return {
    type: dashActionTypes.SET_LEFT_DASH_OPEN,
    payload: data
  }
}
