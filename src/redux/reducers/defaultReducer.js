import { combineReducers } from 'redux'
import * as types from '../actions/types'
import * as currentUser from '../currentUser'
import { FETCH_DATA } from '../actions/indexActions'
// import { GET_INTERVAL_FOR_TEST } from '../actions/types'
// import rootReducer from './RootReducer'

 let testIntervalData = window.localStorage.getItem('testIntervalData')

const initialState = {
  testIntervalData: window.localStorage.getItem('testIntervalData'),
  testArr: window.localStorage.getItem('testArr')
}
console.log(initialState)

export default rootReducer => (state=initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    case types.GET_INTERVAL_FOR_TEST:
      return {...state, currentInterval: action.payload}
    case types.SAY_MAMATA:
      return {...state, greeting: action.payload}
    default:
      return state
  }
}