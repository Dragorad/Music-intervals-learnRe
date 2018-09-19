import * as types from './actions/types'

export const initialState = {
  user: {},
  loggedIn: false
}

export const reducer = (state= initialState, action) => {
  switch (action.types) {
    case types.LOGIN:
      return {...state, user: action.payload, loggedIn: true}
      case types.LOGOUT:
      return {...state, user: action.payload, loggedIn: false}
      
    default: return state
  
  }
}