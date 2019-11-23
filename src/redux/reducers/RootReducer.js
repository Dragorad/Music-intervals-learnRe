import * as types from '../actions/types'
import resultsHandler from '../../appWorkers/resultHandler'
import initialState from '../initialState/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_STORE:
      return { ...state, ...action.payload }
    case types.SET_LANGUAGE:
      return {
        ...state, languageSelected: action.payload
      }
    case types.SET_TEST_INTERVAL_DATA:
      return {
        ...state,
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
    case types.SET_TEST_ARR:
      return {
        ...state, testArr: action.payload
      }
    case types.RE_GENERATE_NEW_TEST:
      return {
        ...state,
        testArr: action.payload.newTestArr,
        currentInterval: action.payload.currentInterval
      }
    case types.SET_USER_ANSWER:
      return { ...state, userAnswer: action.payload }
    case types.SET_IS_SIGNED:
      return { ...state, isSigned: action.payload }
    case types.TEST_FINISHED:
      return { ...state, testFinished: action.payload }
    case types.RESULT_SAVED:
      return { ...state, resultSaved: action.payload }
    case types.SET_IS_SIGNING:
      return { ...state, isSigning: action.payload }
    case types.SET_USERNAME:
      return { ...state, userName: action.payload }
    case types.SET_TEST_RENDERED:
      return { ...state, testRendered: action.payload }
    case types.SET_ANSWER_VISIBLE:
      return { ...state, answerVisible: action.payload }
    case types.SET_ANSWERING_DISABLED:
      return { ...state, answeringDisabled: action.payload }
    case types.SET_TIME_REMAINING:
      return { ...state, timeRemaining: action.payload }
    case types.SET_TIMER_WORKING:
      return { ...state, timerWorking: action.payload }
    case types.TIMER_RESET:
      return {
        ...state,
        timerWorking: action.payload.timerWorking,
        timeRemaining: action.payload.timeRemaining
      }
    case types.CHANGE_TASKS_REMAINING:
      return { ...state, tasksRemaining: action.payload }
    case types.SET_POINTS_PER_ANSWER:
      return { ...state, pointsPerAnswer: action.payload }
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
    case types.ADD_ANSWER_TO_RESULT:
      return {
        ...state,
        sessionAnswers:
          [...state.sessionAnswers].map(el => el.name === action.payload.name
            ? resultsHandler.handleSingleResult(el, action.payload) : el
          )
      }
    case types.ADD_POINTS_TO_RESULT:
      return { ...state, sessionPoints: state.sessionPoints + action.payload }
    case types.SET_SESSION_POINTS:
      return { ...state, sessionPoints: action.payload }
    case types.SET_BEST_RESULS_MINIMIZED:
      return { ...state, bestResultsMinimized: action.payload }
    case types.TOGGLE_BEST_RESULS:
      return { ...state, bestResultsMinimized: action.payload }
    case types.PUSH_INTERVAL_IN_RESULTS:
      return { ...state, testResult: action.payload }
    default:
      return state
  }
}

export default rootReducer
