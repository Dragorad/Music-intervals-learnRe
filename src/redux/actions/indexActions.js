import * as types from './types'
import muzWorker from '../../appWorkers/intervalWorker'
import eventWorker from '../../appWorkers/eventWorker'
import languagesText from '../../LanguagesData/LanguagesText'
import jquery from 'jquery'

let $ = jquery

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

export const setTimerWorking = boolean => ({
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
export const nextQuestionClickedAction = () => (
  (dispatch, getState) => {
    dispatch(setTimerWorking(false))
    console.log('next quest from actions')
    let language = getState().languageSelected
    if (getState().tasksRemaining > 0) {
      dispatch(setCurrentInterval(getState().testArr))
      dispatch(setTimeRemaining(getState().testIntervalData.timeForAnswer))
      $('#testedAnswer').val(`${languagesText[language].workPane.answerArea.dontKnow}`)
      dispatch(changeTasksRemaining(getState().tasksRemaining))
      dispatch(setAnswerVisible(false))
      dispatch(setAnsweringDisabled(false))
      
      dispatch(setTimerWorking(true))
      
      let newTestInterval = getState().currentInterval
      console.log(newTestInterval)
      eventWorker.baseKeyColorize(newTestInterval)
      dispatch(actionTimer())
    }
  }
)
export const actionTimer = () => (
  function (dispatch, getState) {
    console.log('action timer run')
    let timer0 = setTimeout(
      function inner () {
        let timeRemaining = getState().timeRemaining
        dispatch(setTimeRemaining(timeRemaining - 1))
        let timerWorking = getState().timerWorking
        console.log(timerWorking)
        timer0 = setTimeout(inner, 1000)
        if (!timerWorking) {
          clearTimeout(timer0)
          return
        }
        if (timeRemaining === 1) {
          dispatch(setAnswerVisible(true))
          dispatch(setTimerWorking(false))
          console.log('ho ho ho')
          let pointsPerAnswer = getState().pointsPerAnswer
          let userAnswer = getState().userAnswer
          let isAnswerTrue = userAnswer === getState().currentInterval.answer
          let intervalName = getState().currentInterval.name
          dispatch(addAnswerToResult(intervalName, isAnswerTrue))
          dispatch(addPointsToResult(pointsPerAnswer, isAnswerTrue))
          dispatch(setAnsweringDisabled(true))
          clearTimeout(timer0)
        }
      })
  })

export const setAnswerVisible = boolean => ({
  type: types.SET_ANSWER_VISIBLE,
  payload: boolean
})
export const setAnsweringDisabled = boolean => ({
  type: types.SET_ANSWERING_DISABLED,
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

