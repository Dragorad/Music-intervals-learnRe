import { createStore, combineReducers } from 'redux'
import { rootReducer, initialState } from './reducers/RootReducer'
import {createStore, applyMiddleware} from 'redux'
import { reducer, initialState as userInitialState } from './currentUser'

const loggingMiddleware = (store)=>(next)=> (action)=>{
  console.log('Redux log', action)
  next(action)
}

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggingMiddleware
    )
    
  )
  return store
}

export default configureStore