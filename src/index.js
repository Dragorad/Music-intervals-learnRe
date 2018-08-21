import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TestForm from './components/TestForm'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import ControlFields from './components/ControlFields'
import ControlForm from './components/ControlForm'
import WorkPane from './components/WorkPane'
import Footer from './components/Footer'
// import IntervalGroup from './components/IntervalGroup'
// import IntervalButtonsWrap from './components/IntervalButtonsWrap'

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('root'))
registerServiceWorker()