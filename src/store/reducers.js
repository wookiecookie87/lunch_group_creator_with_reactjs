import { combineReducers } from 'redux'
import locationReducer from './location'
import memberReducer from './members/members'
import groupReducer from './groups/groups'
import notifyReducer from './notification'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    members : memberReducer,
    groups : groupReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
