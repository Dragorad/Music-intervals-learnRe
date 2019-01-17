import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBrJA-A-KL1QzUa1MRbgLSIcDEw_5Wyu7Y',
  authDomain: 'music-intervals-test-react.firebaseapp.com',
  databaseURL: 'https://music-intervals-test-react.firebaseio.com',
  projectId: 'music-intervals-test-react',
  storageBucket: 'music-intervals-test-react.appspot.com',
  messagingSenderId: '75447750336'
}


firebase.initializeApp(config)

export default firebase
