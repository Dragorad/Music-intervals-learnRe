import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TestForm from './components/TestForm'
import { BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import logger from 'redux-logger'

import ReduxPromise from 'redux-promise'

import registerServiceWorker from './registerServiceWorker'
import ControlFields from './components/ControlFields'
import ControlForm from './components/ControlForm'
import WorkPane from './components/WorkPane'
import Footer from './components/Footer'

// const store = createStore(
//   reducers, applyMiddleware(logger, ReduxPromise)
// )

ReactDOM.render(
  /*<Provider>*/
    <App/>
  // </Provider>
, document.getElementById('root')
)
registerServiceWorker()