import { ADD_ARTICLE } from '../constants/action-types'
import * as types from '../actions/types'

const initialState = {
  testIntervalData: {},
  testArr: {},
  pointsPerAnswer: 0,
  totalPoints: 0,
  testResult:{}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return {...state, articles: [...state.articles,action.payload]}
    case types.TEST_INTERVAL_DATA:
      return {...state, testIntervalData: action.payload}
      case types.GENERATE_TEST_ARR:
      return {...state, testArr: action.payload}
      case types.PUSH_INTERVAL_IN_RESULTS:
      return {...state, testResult: action.payload}
    default:
      return state
  }
}
export default rootReducer
