import * as types from '../actions/types'
import resultsHandler from '../../appWorkers/resultHandler'
// import initialStore from '../initialStore/initialStore'
import initialState from '../initialState/initialState'

// const initialStore = {
//   testIntervalData: {},
//   testArr: {},
//   pointsPerAnswer: 0,
//   totalPoints: 0,
//   sessionPoints: 0,
//   sessionAnswers: [],
//   userAnswer: '',
//   tasksRemaining: 0,
//   currentIntervalIdx: 0,
//   currentInterval: {}
// }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state, languageSelected: action.payload
      }
    case types.TEST_INTERVAL_DATA:
      return {
        ...state,
        testIntervalData: action.payload,
        tasksRemaining: action.payload.numberOfTasks,
        sessionAnswers: action.payload.intervalsForTest
      }
    case types.GENERATE_TEST_ARR:
      return {
        ...state,
        testArr: action.payload.testArr,
        currentInterval: action.payload.currentInterval
      }
    case types.RE_GENERATE_NEW_TEST:
      return {
        ...state,
        testArr: action.payload.newTestArr,
        currentInterval: action.payload.currentInterval
      }
    case types.SET_USER_ANSWER:
      return {...state, userAnswer: action.payload}
    case types.SET_TEST_RENDERED:
      return {...state, testRendered: action.payload}
    case types.SET_ANSWER_VISIBLE:
      return {...state, answerVisible: action.payload}
    case types.SET_ANSWERING_DISABLED:
      return {...state, answeringDisabled: action.payload}
    case types.SET_TIME_REMAINING:
      return {...state, timeRemaining: action.payload}
    case types.SET_TIMER_WORKING:
      return {...state, timerWorking: action.payload}
    case types.TIMER_RESET:
      return {
        ...state,
        timerWorking: action.payload.timerWorking,
        timeRemaining: action.payload.timeRemaining
      }
    case types.CHANGE_TASKS_REMAINING:
      return {...state, tasksRemaining: action.payload}
    case types.SET_POINTS_PER_ANSWER:
      return {...state, pointsPerAnswer: action.payload}
    case types.SET_CURRENT_INTERVAL:
      return {
        ...state,
        currentInterval: action.payload.currentInterval,
        currentIntervalIdx: action.payload.idx
      }
    case types.SET_CURRENT_INTERVAL_IDX:
      return {
        ...state, currentIntervalIdx: action.payload
      }
    case types.ADD_ANSWER_TO_RESULT :
      return {
        ...state,
        sessionAnswers:
          [...state.sessionAnswers].map(el => el.name === action.payload.name
            ? resultsHandler.handleSingleResult(el, action.payload) : el
          )
      }
    case types.ADD_POINTS_TO_RESULT :
      return {...state, sessionPoints: state.sessionPoints + action.payload}
    case
    types.PUSH_INTERVAL_IN_RESULTS :
      return {...state, testResult: action.payload}
    default:
      return state
  }
}

export default rootReducer
