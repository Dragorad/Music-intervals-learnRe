import { ADD_ARTICLE } from '../constants/action-types'
import { GENERATE_TEST_ARR, TEST_INTERVAL_DATA } from '../actions/types'

const initialState = {
  testIntervalData: {},
  testArr: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles,action.payload]}
    case TEST_INTERVAL_DATA:
      return {...state, testIntervalData: action.payload}
      case GENERATE_TEST_ARR:
      return {...state, testArr: action.payload}
    default:
      return state
  }
}
export default rootReducer