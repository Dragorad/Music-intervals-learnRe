import firebase from 'firebase'
// import firestore from 'firebase\firestore'
import { configApi } from './configAPI'

const dataWorker = ( () => {
  const settings = {timestampsInSnapshots: true}
  
  const fire = firebase.initializeApp(configApi)
  const db = firebase.firestore()
  db.settings(settings)
  
  db.enablePersistence()
    .catch(function(err) {
      if (err.code == 'failed-precondition') {
        console.log(`"Multiple tabs open, persistence can only be enabled
                in one tab at a a time.
                ...`)
      } else if (err.code == 'unimplemented') {
        console.log(`The current browser does not support all of the
                features required to enable persistence
                ...`)
      }
    })
  function addResult (collectionName, resultObj) {
    console.log('from dataWorker')
    db.collection(collectionName).add(resultObj)
      .then(function (docRef) {
        console.log('Document written with ID:', docRef.parent)
      })
  }
  // db.collection.results
  return {
    fire,
    db,
    addResult
  }
})()

export default dataWorker
// let collection = 'resultStats'
// let resultObj = {
//   littleSecond :{
//     trueAnswers: 3,
//     falseAnswers: 5
//   }
// }
// dataWorker.addResult(collection, resultObj)
