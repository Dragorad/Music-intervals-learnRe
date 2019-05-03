import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {FirebaseApp, FirebaseContext} from "./appWorkers/firebaseWorker"
// import FirebaseContext from ''

ReactDOM.render(
    <FirebaseContext.Provider value = { FirebaseApp }>
     <App/>
    </FirebaseContext.Provider>
 , document.getElementById('root')
)
registerServiceWorker()
