import * as types from './types'
import muzWorker from '../../appWorkers/intervalWorker'
import eventWorker from '../../appWorkers/eventWorker'

export const sayMamata = text => ({
  type: types.SAY_MAMATA,
  payload: text + 'Mamata!'
})
export const setLanguage = language => ({
  type: types.SET_LANGUAGE,
  payload: language
})
export const generateTestArr = (intervalsForTest, numberOfTasks) => (
  function (dispatch) {
    let testArr = muzWorker.generateTestArr(intervalsForTest, numberOfTasks)
    let currentInterval = testArr[0]
    
    dispatch({
      type: types.GENERATE_TEST_ARR,
      payload: {
        testArr,
        currentInterval
      }
    })
  })
export const setTestIntervalData = intervalData => ({
  type: types.TEST_INTERVAL_DATA,
  payload: intervalData
})
export const setTimeForAnswer = time => ({
  type: types.SET_TIME_FOR_ANSWER,
  payload: time
})
export const setTimeRemaining = time => ({
  type: types.SET_TIME_REMAINING,
  payload: time
})

export const setTimerWorking = (boolean) => ({
  type: types.SET_TIMER_WORKING,
  payload: boolean
})
export const timerStop = () => ({
  type: types.TIMER_STOP,
  payload: false
})
export const timerReset = () => ({
  type: types.TIMER_RESET,
  payload: {
    timeRemaining: 0,
    timerWorking: false
  }
})
export const actionTimer = () => (
  function (dispatch) {
    // let INTERVAL = 500
    let runTimer = () => {
      return (dispatch, getState) => {
        // dispatch(start())
        let timeForAnswer = getState().timeForAnswer
        let timeRemaining = getState().timeRemaining
        let timer0 = (setTimeout(
            function inner (time) {
              let timerWorking = getState().timerWorking
              time -= 1
              dispatch(setTimeRemaining(time))
              console.log('timer Working' + time)
              timer0 = setTimeout(inner, 500, time)
              if (time === 0 || !timerWorking) {
                dispatch(setAnswerVisible(true))
                console.log('HO HO ho')
                clearTimeout(timer0)
              }
            }, 1000, timeForAnswer)
        )
      }
    }
    runTimer()
  })
export const setAnswerVisible = boolean => ({
  type: types.SET_ANSWER_VISIBLE,
  payload: boolean
})

export const fillAnswerInput = text => ({
  type: types.FILL_ANSWER_INPUT,
  payload: text
})
export const pushIntervalInResults = intervalName => ({
  type: types.PUSH_INTERVAL_IN_RESULTS,
  payload: intervalName
})
export const setCurrentIntervalIdx = () => ({
  type: types.SET_CURRENT_INTERVAL_IDX,
  payload: eventWorker.passIndex()
})

export const setCurrentInterval = intervalArea => (
  function (dispatch) {
    let idx = eventWorker.passIndex()
    let currentInterval = intervalArea[idx]
    eventWorker.baseKeyColorize(currentInterval)
    dispatch({
        type: types.SET_CURRENT_INTERVAL,
        payload: {
          idx,
          currentInterval
        }
      }
    )
  }
)

export const generateNewTest = intervalData => (
  function (dispatch) {
    let newTestArr = muzWorker.generateTestArr(intervalData.intervalsForTest, intervalData.numberOfTasks)
    
    dispatch({
      type: types.GENERATE_NEW_TEST,
      payload: newTestArr
    })
  })
export const changeTasksRemaining = number => ({
  type: types.CHANGE_TASKS_REMAINING,
  payload: number - 1
})
export const setTestRendered = () => ({
  type: types.SET_TEST_RENDERED,
  payload: true
})
export const setPointsPerAnswer = intervalData => ({
  type: types.SET_POINTS_PER_ANSWER,
  payload: intervalData.intervalsForTest.length * 20 - Number(intervalData.timeForAnswer)
})
export const addPointsToResult = (number, boolean) => ({
  type: types.ADD_POINTS_TO_RESULT,
  payload: (() => {
    if (boolean === false) {
      return number * -1
    }
    return number
  })()
})
export const addAnswerToResult = (intervalName, boolean) => ({
  type: types.ADD_ANSWER_TO_RESULT,
  payload: {
    name: intervalName,
    isCorrect: boolean
  }
})

export const getIntervalForTest = (testArr) => {
  let idx = 0
  return {
    type: types.GET_INTERVAL_FOR_TEST,
    payload: testArr[idx++]
  }
}
export const setUserAnswer = (answer) => {
  return {
    type: types.SET_USER_ANSWER,
    payload: answer
  }
}

export const FETCH_DATA = 'fetch_data'

export function defaultFunction () {
  let testVar = 'Hello'
  return {
    type: FETCH_DATA,
    payload: testVar
  }
}
