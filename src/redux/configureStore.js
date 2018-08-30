import { createStore, combineReducers } from 'redux'
import {RootReducer, initialState}  from './reducers/RootReducer'

import {reducer, initialState as userInitialState} from './currentUser'

export const configureStore = () => {
  const store = createStore(
    combineReducers(
      {time: RootReducer,
      user: reducer}
    ),
    {time:initialState,
    user:userInitialState}
    
  )
  return store
}

export default configureStore