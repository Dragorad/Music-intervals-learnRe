import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {FirebaseApp, FirebaseContext} from "./appWorkers/firebaseWorker"
import {defaultContextValue} from "./ReactContext/initialContext"
import {AppContext} from '../src/ReactContext/initialContext'
// import FirebaseContext from ''

ReactDOM.render(
    <AppContext.Provider value = { defaultContextValue }>
     <App/>
    </AppContext.Provider>
 , document.getElementById('root')
)
registerServiceWorker()
