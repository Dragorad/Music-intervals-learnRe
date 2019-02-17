import firebase from 'firebase'

const authWorker = (() => {
  const useAuth = (email, password) => {firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...
      })
  }
  
  return {
    useAuth
  }
})()

export default authWorker
