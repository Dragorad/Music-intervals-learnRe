import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  testIntervalData: JSON.parse(window.localStorage.getItem('testIntervalData')),
  testArr: JSON.parse(window.localStorage.getItem('testArr'))
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      
      return {...state, articles: [...state.articles,action.payload]}
    
    default:
      return state
  }
}
export default rootReducer