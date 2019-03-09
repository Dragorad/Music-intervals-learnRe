import firebase from 'firebase'
// import firestore from 'firebase\firestore'
import { configApi } from './configAPI'

const dataWorker = (() => {
  const settings = {timestampsInSnapshots: true}
  
  const fire = firebase.initializeApp(configApi)
  const db = firebase.firestore()
  db.settings(settings)
  
  db.enablePersistence()
    .catch(function (err) {
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
    console.log(resultObj)
    db.collection(collectionName).add(resultObj)
      .then(function (docRef) {
        let id = docRef.id
        
        console.log('Document written with ID:', id)
        let document = db.collection('results').doc(id)
        document.get()
          .then(doc => {
            let timeSaved = doc.data().timeSaved.toDate().toLocaleDateString()
            alert(`result saved with id ${id}`)
            console.log(timeSaved)
            
          })
        
      })
  }
  
  async function getBestScores (collectionName, numberOfResults) {
    
    let resultsQuery = db.collection('results').where('sessionPoints', '>', 0)
      .orderBy('sessionPoints', 'desc').limit(numberOfResults)
    console.log('fetch data started')
    return resultsQuery.get()
      .then(snapshot => {
          let scoresArr = []
          snapshot.forEach(
            doc => {
              let data = doc.data()

              console.log(data.user + ' ' + data.sessionPoints)
              scoresArr.push(data)
            }
          )
          console.log(scoresArr)

        return scoresArr
        }
      )
    
  }
  
  //
  // db.collection.results
  return {
    fire,
    db,
    addResult,
    getBestScores
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
