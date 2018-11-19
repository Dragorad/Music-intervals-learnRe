import * as types from './types'
import muzWorker from '../../appWorkers/intervalWorker'
import eventWorker from '../../appWorkers/eventWorker'

export const sayMamata = text => ({
  type: types.SAY_MAMATA,
  payload: text + 'Mamata!'
})
export const setLanguage = language => ({
  type: types.SET_LANGUAGE,
  payload:language
})
export const generateTestArr = (intervalsForTest, numberOfTasks) => ({
  type: types.GENERATE_TEST_ARR,
  payload: {
    testArr: muzWorker.generateTestArr(intervalsForTest, numberOfTasks),
    get currentInterval(){
      return this.testArr[0]}
  }
})
export const setTestIntervalData = intervalData => ({
  type: types.TEST_INTERVAL_DATA,
  payload: intervalData
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
export const setCurrentInterval = (intervalArea) => ({
  type: types.SET_CURRENT_INTERVAL,
  payload: {
    idx: eventWorker.passIndex(),
    get currentInterval(){
      return intervalArea[this.idx]
    }}
})
export const generateNewTest = intervalData => ({
  type: types.GENERATE_NEW_TEST,
  payload: muzWorker.generateTestArr(intervalData.intervalsForTest, intervalData.numberOfTasks)
})
export const changeTasksRemaining = number => ({
  type: types.CHANGE_TASKS_REMAINING,
  payload: number - 1
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

// export const SELECT_ALL = {
//   type: SELECT_ALL,
//   foo: (e)=>{
//
//       $('input[type="checkbox"]').not(this).prop('checked', this.checked)
//     }
//   }
// export const SAY_HELLO = 'Hi I am action'
//
// export
