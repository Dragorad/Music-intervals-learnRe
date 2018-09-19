import {combineReducers } from 'redux'
import * as types from '../actions/types'
import * as currentUser from '../currentUser'
// import * as currentTime from '../currentTime'
import * as logIntervalsNames from './DisplayIntervalsNames'

const initialState = {
  testIntervalData: window.localStorage.getItem('testIntervalData'),
  testArr: window.localStorage.getItem('testArr'),
  // currentTime: currentTime.initialState,
  // currentUser: currentUser.initialState,
  //
}
//
// export const rootReducer = combineReducers({
  // currentTime: currentTime.reducer,
  // currentUser: currentUser.reducer,
  // intervalsNames: logIntervalsNames,
// })

const GTrootReducer = (state=initialState, action)=>{
  switch (action.type) {
    case types.FETCH_NEW_TIME:{
      return{...state, currentTime: action.payload}
    }
    default: return state
  }
  return state
}

export default GTrootReducer