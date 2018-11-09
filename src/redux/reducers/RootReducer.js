import * as types from '../actions/types'
import getState from 'react-redux'
import resultsHandler from '../../appWorkers/resultHandler'

const initialState = {
  testIntervalData: {},
  testArr: {},
  pointsPerAnswer: 0,
  totalPoints: 0,
  sessionPoints: 0,
  sessionAnswers: [],
  userAnswer: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_INTERVAL_DATA:
      return {...state, testIntervalData: action.payload,
      sessionAnswers: action.payload.intervalsForTest
      }
    case types.GENERATE_TEST_ARR:
      return {...state, testArr: action.payload}
    case types.SET_USER_ANSWER:
      return {...state, userAnswer: action.payload}
    case types.SET_POINTS_PER_ANSWER:
      return {...state, pointsPerAnswer: action.payload}
    case types.ADD_ANSWER_TO_RESULT:
      return {
        ...state, sessionAnswers:
           [...state.sessionAnswers].map( el => el.name === action.payload.name ?
              resultsHandler.handleSingleResult(el, action.payload) : el
          )}
        case types.ADD_POINTS_TO_RESULT:
      return {...state, sessionPoints: state.sessionPoints + action.payload}
    case types.PUSH_INTERVAL_IN_RESULTS:
      return {...state, testResult: action.payload}
    default:
      return state
  }
}

export default rootReducer

