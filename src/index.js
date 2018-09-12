import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import TestForm from './components/TestForm'
// import { BrowserRouter} from 'react-router-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import logger from 'redux-logger'

// import ReduxPromise from 'redux-promise'

import registerServiceWorker from './registerServiceWorker'
import ControlFields from './components/views/ControlFields'
import ControlForm from './components/views/ControlForm'
import WorkPane from './components/views/WorkPane'
import Footer from './components/views/Footer'

// const store = createStore(
//   reducers, applyMiddleware(logger, ReduxPromise)
// )

ReactDOM.render(
  
     <App/>
 , document.getElementById('root')
)
registerServiceWorker()