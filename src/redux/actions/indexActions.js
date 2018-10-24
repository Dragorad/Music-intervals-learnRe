import * as types from './types'
import muzWorker from '../../intervalWorker'


export const sayMamata = text=> ({
    type: types.SAY_MAMATA,
    payload: text + 'Mamata!'
  })

export const generateTestArr = (intervalsForTest, numberOfTasks) => ({
  type: types.GENERATE_TEST_ARR,
  payload: muzWorker.generateTestArr(intervalsForTest, numberOfTasks)
})
export const setTestIntervalData = intervalData => ({
  type: types.TEST_INTERVAL_DATA,
  payload: intervalData
})
export const fillAnswerInput = text=> ({
    type: types.FILL_ANSWER_INPUT,
    payload: text
  })
export const pushIntervalInResults = intervalName => ({
   
    type: types.PUSH_INTERVAL_IN_RESULTS,
    payload: intervalName
  })
export const generateNewTest = intervalData => ({
  type: types.GENERATE_NEW_TEST,
  payload: () => {
    muzWorker.generateTestArr(intervalData.intervalsForTest, intervalData.numberOfTasks)
  }
})
export const getIntervalForTest = (testArr)=>{
  let idx =0
  return {
    type: types.GET_INTERVAL_FOR_TEST,
    payload: testArr[idx++]
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
