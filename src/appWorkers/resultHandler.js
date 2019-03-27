const resultsHandler = (() => {
  
  function handleSingleResult (targetObj, intervalObj) {
    console.log(targetObj)
    console.log(intervalObj)
    let resultObj = {...targetObj}
    if (intervalObj.isCorrect === true) {
      resultObj.trueAnswers += 1
    } else {
      resultObj.falseAnswers += 1
    }
    console.log(intervalObj)
    console.log(resultObj)
    return resultObj
  }
  
  function answering (props) {
    // e.preventDefault()
    let pointsPerAnswer = props.pointsPerAnswer
    let userAnswer = props.userAnswer
    let isAnswerTrue = userAnswer === props.testInterval.answer
    let intervalName = props.testInterval.name
    props.setTimerWorking(false)
    if (!props.answeringDisabled) {
      props.addAnswerToResult(intervalName, isAnswerTrue)
      props.addPointsToResult(pointsPerAnswer, isAnswerTrue)
      props.setAnsweringDisabled(true)
    }
  }
  
  return {
    handleSingleResult,
    answering
  }
})()
// let state = {
//   testArr:[],
//   sessionAnswers: []
// }
// let storeArr = [{name: 'голяма секунда', rightAnswers: 1, falseAnswers: 2},
//   { name: 'малка терца', rightAnswers: 0, falseAnswers: 2 }]
// let intervalObj = {
//   name: 'чиста квинта',
//   isCorrect: false
// }
// state = ((state, storeArr, intervalObj) => {
//   return {
//     ...state, sessionAnswers:
//       resultsHandler.handleIntervalInResult(storeArr, intervalObj)
//   }
// })(state, storeArr, intervalObj)
// intervalObj = {
//   name: 'чиста квинта',
//   isCorrect: false
// }
// state = ((state, storeArr, intervalObj) => {
//   return {
//     ...state, sessionAnswers:
//       resultsHandler.handleIntervalInResult(storeArr, intervalObj)
//   }
// })(state, storeArr, intervalObj)
// // storeArr = resultsHandler.handleIntervalInResult(storeArr, intervalObj)
// // console.log(storeArr)
// intervalObj = {
//   name: 'чиста квинта',
//   isCorrect: true
// }
//
// state = ((state, storeArr, intervalObj) => {
//   return {
//     ...state, sessionAnswers:
//       resultsHandler.handleIntervalInResult(storeArr, intervalObj)
//   }
// })(state, storeArr, intervalObj)
// intervalObj = {
//   name: 'чиста квинта',
//   isCorrect: false
// }
//
// state = ( state,storeArr, intervalObj) => {
//   return {
//     ...state, sessionAnswers:
//       resultsHandler.handleIntervalInResult(storeArr, intervalObj)
//   }
// }
// intervalObj = {
//   name: 'малка секунда',
//   isCorrect: true
// }
// let targetObj = {
//   name: 'голяма секунда',
//   trueAnswers: 0,
//   falseAnswers: 0
// }
// let inputObj =  {
//   name: 'голяма секунда',
//   isCorrect: true
// }

// console.log(resultsHandler.handleSingleResult(targetObj, inputObj))
//
// state = ( state,storeArr, intervalObj) => {
//   return {
//     ...state, sessionAnswers:
//       storeArr = resultsHandler.handleIntervalInResult(storeArr, intervalObj)
//   }
// }
// console.log(storeArr)
export default resultsHandler
