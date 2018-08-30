import * as types from './types'

export const fetchNewTime = () => {
  return {
    type: types.FETCH_NEW_TIME,
    payload: new Date().toDateString()
  }
}

export const login = (user) => (
  {
    type: types.LOGIN,
    payload: user
  })

export const logout = () => ({
  type: types.LOGOUT
})