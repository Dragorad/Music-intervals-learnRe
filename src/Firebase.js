import * as firebase from 'firebase'

const config = {
  apiKey: 'XXX',
  authDomain: 'XXX.firebaseapp.com',
  databaseURL: 'XXXt.firebaseio.com',
  projectId: 'ZZZZt',
  storageBucket: 'XXXppspot.com',
  messagingSenderId: 'XXXX'
}


firebase.initializeApp(config)

export default firebase
