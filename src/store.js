import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import BrowserStore from './utils/BrowserStore'
import rootReducer from './redux/reducers/root'

const stateKey = 'state'

const saveToBrowserStore = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    BrowserStore.add(stateKey, serializedState)
  } catch (e) {
    console.log(e)
  }
}

const loadFromBrowserStore = () => {
  try {
    const serializedState = BrowserStore.get(stateKey)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const middlewares = [thunk, createLogger()]

const persistedState = loadFromBrowserStore()

export const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(...middlewares))
)

store.subscribe(() => saveToBrowserStore(store.getState()))

export default store
