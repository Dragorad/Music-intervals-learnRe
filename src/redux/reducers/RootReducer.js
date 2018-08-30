import * as types from '../types'

const initialState = {
  currentTime: new Date().toLocaleTimeString()
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

