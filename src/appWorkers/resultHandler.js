const resultsHandler = (() => {
  
  function handleSingleResult (targetObj, intervalObj) {
    console.log(targetObj)
    console.log(intervalObj)
    let resultObj = {...targetObj}
    if (intervalObj.isCorrect === true) {
      resultObj.trueAnswers +=1}
    else {
      resultObj.falseAnswers += 1
    }
    console.log(intervalObj)
    console.log(resultObj)
    return resultObj
  }
  
  // function handleIntervalInResult (storeArr, intervalObj) {
  //   // console.log(storeArr)
  //   let targetInt = storeArr.find(el => el.name === intervalObj.name)
  //   let pushInt = {}
  //
  //   if (targetInt === undefined) {
  //     if (intervalObj.isCorrect === true) {
  //       pushInt = {
  //         name: intervalObj.name,
  //         rightAnswers: 1,
  //         falseAnswers: 0
  //       }
  //     }
  //     else {
  //       pushInt = {
  //         name: intervalObj.name,
  //         rightAnswers: 0,
  //         falseAnswers: 1
  //       }
  //     }
  //     return [...storeArr, pushInt]
  //   } else {
  //     if (intervalObj.isCorrect === true) {
  //       pushInt = {
  //         name: intervalObj.name,
  //         rightAnswers: targetInt.rightAnswers + 1,
  //         falseAnswers: targetInt.falseAnswers
  //       }
  //     }
  //     else {
  //       pushInt = {
  //         name: intervalObj.name,
  //         rightAnswers: targetInt.rightAnswers,
  //         falseAnswers: targetInt.falseAnswers + 1
  //       }
  //     }
  //   }
  //
  //   return [...storeArr.map(el => el.name === intervalObj.name ?
  //     pushInt : el)]
  // }
  //
  // function storeResult (testedInterval, answer) {
  //   // totalQuestions += 1
  //
  //   if (testedInterval.answer === answer) {
  //     sessionResults[`${testedInterval.name}`].hits++
  //     sessionResults.rightAnswers++
  //   }
  //   sessionResults[`${testedInterval.name}`].misses++
  //   sessionResults.falseAnswers++
  // }
  //
  return {
    handleSingleResult
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
