import {combineReducers } from 'redux'
import * as types from '../types'
import * as currentUser from '../currentUser'
import * as currentTime from '../currentTime'

const initialState = {
  currentTime: new Date().toLocaleTimeString()
}

export const rootReducer = combineReducers({
  currentTime: currentTime.reducer,
  currentUser: currentUser.reducer
})

export const initialState = {
  currentTime: currentTime.initialState,
  currentUser: currentUser.initialState,
  
}
const RootReducer = (state=initialState, action)=>{
  switch (action.type) {
    case types.FETCH_NEW_TIME:{
      return{...state, currentTime: action.payload}
    }
    default: return state
  }
  return state
}

export default rootReducer